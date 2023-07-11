using System.Net;
using System.Net.Http.Json;
using Microsoft.Extensions.DependencyInjection;
using product.Dtos;
using product.Models;
using product.Repositories;
using Xunit.Abstractions;

namespace productTest.CategoriesController;

public class DeleteCategoryControllerTest : IClassFixture<ProductApiFactory>
{
    private readonly ProductApiFactory _factory;

    private readonly ITestOutputHelper _testOutputHelper;

    private readonly HttpClient _client;
    
    public DeleteCategoryControllerTest(ProductApiFactory factory, ITestOutputHelper testOutputHelper)
    {
        _factory = factory;
        _testOutputHelper = testOutputHelper;
        _client = _factory.CreateClient();
    }

    [Fact]
    public async Task Delete_Category_ReturnsNoContentStatus()
    {
        Category category = new Category
        {
            Name = "Test",
            Description = "Test",
        };
        
        using (IServiceScope scope = _factory.Services.CreateScope())
        {
            ICategoryRepo categoryRepo = scope.ServiceProvider.GetRequiredService<ICategoryRepo>();
            
            categoryRepo.Create(category);

            categoryRepo.Save();
        }

        HttpResponseMessage response = await _client.PutAsync($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}/{category.Id}/delete", null);
        
        response.EnsureSuccessStatusCode();
        
        CategoryReadDto? categoryReadDto = await response.Content.ReadFromJsonAsync<CategoryReadDto>();
        
        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        Assert.NotNull(categoryReadDto);
        Assert.NotNull(categoryReadDto.DeletedAt);
    }

    [Fact]
    public async Task Delete_Category_ReturnsNotFoundStatus()
    {
        int unknownCategoryId = 5;

        HttpResponseMessage notFoundCategoryResponse = await _client.PutAsync($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}/{unknownCategoryId}/delete", null);
        
        Assert.Equal(HttpStatusCode.NotFound, notFoundCategoryResponse.StatusCode);
    }
}