using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace main.Controllers;

[EnableCors("AllowAll")]
[Route("api/[controller]")]
[ApiController]
public class TestController : ControllerBase
{
    [HttpGet]
    public ActionResult<string> GetTestData()
    {
        Console.WriteLine("--> Get Test Data");

        return Ok("hello form test controller");
    }
}