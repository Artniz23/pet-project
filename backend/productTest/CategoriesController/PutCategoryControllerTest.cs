using System.Net;
using System.Net.Http.Json;
using Microsoft.Extensions.DependencyInjection;
using product.Dtos;
using product.Models;
using product.Repositories;
using Xunit.Abstractions;

namespace productTest.CategoriesController;

public class PutCategoryControllerTest : IClassFixture<ProductApiFactory>
{
    private readonly ProductApiFactory _factory;

    private readonly ITestOutputHelper _testOutputHelper;
    
    private readonly HttpClient _client;
    
    public PutCategoryControllerTest(ProductApiFactory factory, ITestOutputHelper testOutputHelper)
    {
        _factory = factory;
        _testOutputHelper = testOutputHelper;
        _client = _factory.CreateClient();
    }

    [Fact]
    public async Task Put_Category_ReturnsUpdatedCategory()
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

        CategoryCreateDto categoryUpdateDto = new CategoryCreateDto
        {
            Name = "UpdatedTest",
            Description = "UpdatedTest",
        };

        HttpResponseMessage updatedCategoryResponse = await _client.PutAsJsonAsync($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}/{category.Id}",
            categoryUpdateDto);

        updatedCategoryResponse.EnsureSuccessStatusCode();

        CategoryReadDto? updatedCategoryReadDto = await updatedCategoryResponse.Content.ReadFromJsonAsync<CategoryReadDto>();

        Assert.NotNull(updatedCategoryReadDto);
        Assert.Equal(HttpStatusCode.Created, updatedCategoryResponse.StatusCode);
        Assert.Equal(categoryUpdateDto.Name, updatedCategoryReadDto.Name);
        Assert.Equal(categoryUpdateDto.Description, updatedCategoryReadDto.Description);
        Assert.Equal(categoryUpdateDto.ParentId, updatedCategoryReadDto.ParentId);
        Assert.NotNull(updatedCategoryReadDto.UpdatedAt);
    }
}