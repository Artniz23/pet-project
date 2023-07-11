using System.Net;
using System.Net.Http.Json;
using Newtonsoft.Json;
using product.Dtos;
using Xunit.Abstractions;

namespace productTest.CategoriesController;

public class CategoryControllerTest : IClassFixture<ProductApiFactory>
{
    private readonly ITestOutputHelper _testOutputHelper;

    private readonly CategoryCreateDto _testCategoryDto;
    
    private readonly HttpClient _client;

    public CategoryControllerTest(ProductApiFactory factory, ITestOutputHelper testOutputHelper)
    {
        _testOutputHelper = testOutputHelper;
        _client = factory.CreateClient();
        _testCategoryDto = new CategoryCreateDto
        {
            Name = "Test",
            Description = "TestDescription",
        };
    }

    [Fact]
    public async Task Post_ParentCategory_ReturnsCategoryReadDto()
    {
        int defaultId = 0;

        HttpResponseMessage response =
            await _client.PostAsJsonAsync($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}",
                _testCategoryDto);

        response.EnsureSuccessStatusCode();

        CategoryReadDto? categoryReadDto = await response.Content.ReadFromJsonAsync<CategoryReadDto>();
        
        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        Assert.NotNull(categoryReadDto);
        Assert.Equal($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}/{categoryReadDto.Id}",
            response.Headers.Location!.ToString());
        Assert.Equal(categoryReadDto.Name, _testCategoryDto.Name);
        Assert.Equal(categoryReadDto.Description, _testCategoryDto.Description);
        Assert.Null(categoryReadDto.ParentId);
        Assert.NotEqual(defaultId, categoryReadDto.Id);
        Assert.Empty(categoryReadDto.Children);
        Assert.NotNull(categoryReadDto.CreatedAt);
    }

    [Fact]
    public async Task Post_ParentCategoryWithChildren_CheckConnectionBetweenChildAndParent()
    {
        CategoryReadDto? categoryReadDto =
            await (await _client.PostAsJsonAsync($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}",
                _testCategoryDto)).EnsureSuccessStatusCode()
                .Content.ReadFromJsonAsync<CategoryReadDto>();

        Assert.NotNull(categoryReadDto);

        CategoryCreateDto childCategoryCreateDto = new CategoryCreateDto
        {
            Name = "Test",
            Description = "TestDescription",
            ParentId = categoryReadDto.Id
        };

        CategoryReadDto? childCategoryReadDto =
            await (await _client.PostAsJsonAsync($"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}",
                    childCategoryCreateDto))
                .EnsureSuccessStatusCode()
                .Content.ReadFromJsonAsync<CategoryReadDto>();

        Assert.NotNull(childCategoryReadDto);
        Assert.Empty(childCategoryReadDto.Children);

        CategoryReadDto? parentCategoryReadDto =
            await (await _client.GetAsync(
                    $"{TestEnvironment.ApplicationUrl}{TestEnvironment.CategoriesApi}/{categoryReadDto.Id}"))
                .EnsureSuccessStatusCode()
                .Content.ReadFromJsonAsync<CategoryReadDto>();

        Assert.NotNull(parentCategoryReadDto);
        Assert.Single(parentCategoryReadDto.Children);
        Assert.Equal(childCategoryReadDto.ParentId, parentCategoryReadDto.Id);

        CategoryReadDto categoryReadDtoFromParent = parentCategoryReadDto.Children[0];

        string serializedFindCategory = JsonConvert.SerializeObject(childCategoryReadDto);
        string serializedFromParentCategory = JsonConvert.SerializeObject(categoryReadDtoFromParent);
        
        Assert.Equal(serializedFindCategory, serializedFromParentCategory);
    }
}