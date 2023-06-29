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

        HttpResponseMessage response = await client.GetAsync("http://localhost:8081/api/Categories");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}