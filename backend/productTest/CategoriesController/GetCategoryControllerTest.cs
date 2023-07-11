using System.Net;
using System.Net.Http.Json;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using product.Dtos;
using product.Models;
using product.Repositories;
using Xunit.Abstractions;

namespace productTest.CategoriesController;

public class GetAllCategoryControllerTest : IClassFixture<ProductApiFactory>
{
    private readonly ProductApiFactory _factory;
    
    private readonly ITestOutputHelper _testOutputHelper;
    
    private readonly HttpClient _client;

    public GetAllCategoryControllerTest(ProductApiFactory factory, ITestOutputHelper testOutputHelper)
    {
        _factory = factory;
        _testOutputHelper = testOutputHelper;
        _client = _factory.CreateClient();
    }
    
    [Fact]
    public async Task Get_ParentsCategories_ShouldBeOkStatusAndGetThreeCategories()
    {
        List<Category> categories = new()
        {
            new Category
            {
                Name = "Test",
                Description = "Test"
            },
            new Category
            {
                Name = "Test2",
                Description = "Test2"
            },
            new Category
            {
                Name = "Test3",
                Description = "Test3"
            }
        };
        
        using (IServiceScope scope = _factory.Services.CreateScope())
        {
            ICategoryRepo categoryRepo = scope.ServiceProvider.GetRequiredService<ICategoryRepo>();
            
            categoryRepo.CreateRange(categories);

            categoryRepo.Save();
        }

        HttpResponseMessage response = await _client.GetAsync($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}");

        response.EnsureSuccessStatusCode();

        List<CategoryReadDto>? categoryReadDtos = await response.Content.ReadFromJsonAsync<List<CategoryReadDto>>();

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        Assert.NotNull(categoryReadDtos);
        Assert.Equal(categories.Count, categoryReadDtos.Count);
    }
    
    [Fact]
    public async Task Get_CategoryById_ShouldBeOkStatusAndGetCategory()
    {
        CategoryCreateDto categoryCreateDto = new CategoryCreateDto
        {
            Name = "Test",
            Description = "Test"
        };

        CategoryReadDto? createdCategoryReadDto =
            await (await _client.PostAsJsonAsync($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}",
                categoryCreateDto)).EnsureSuccessStatusCode().Content.ReadFromJsonAsync<CategoryReadDto>();

        Assert.NotNull(createdCategoryReadDto);

        HttpResponseMessage response = await _client.GetAsync($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}/{createdCategoryReadDto.Id}");

        response.EnsureSuccessStatusCode();

        CategoryReadDto? categoryReadDto = await response.Content.ReadFromJsonAsync<CategoryReadDto>();
        
        Assert.NotNull(categoryReadDto);

        string serializedCategory = JsonConvert.SerializeObject(categoryReadDto);
        string serializedCreatedCategory = JsonConvert.SerializeObject(createdCategoryReadDto);
        
        _testOutputHelper.WriteLine(serializedCreatedCategory);
        _testOutputHelper.WriteLine(serializedCategory);

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        Assert.Equal(serializedCreatedCategory, serializedCategory);
    }
}