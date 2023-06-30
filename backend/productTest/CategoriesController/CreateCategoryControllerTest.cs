using System.Net;
using Xunit.Abstractions;

namespace productTest.CategoriesController;

public class CreateCategoryControllerTest : IClassFixture<ProductApiFactory>
{
    private readonly ProductApiFactory _factory;
    
    private readonly ITestOutputHelper _testOutputHelper;

    public CreateCategoryControllerTest(ProductApiFactory factory, ITestOutputHelper testOutputHelper)
    {
        _factory = factory;
        _testOutputHelper = testOutputHelper;
    }

    [Fact]
    public async Task GetCategories_ReturnValidData()
    {
        HttpClient client = _factory.CreateClient();

        HttpResponseMessage response = await client.GetAsync("http://localhost:7155/api/Categories");

        string content = await response.Content.ReadAsStringAsync();
        
        _testOutputHelper.WriteLine(content);
        
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}