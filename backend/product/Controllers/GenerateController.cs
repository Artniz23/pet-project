using System.Text.Json;
using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using product.Dtos;
using product.Models;
using product.Repositories;

namespace product.Controllers;

[EnableCors("AllowAll")]
[Route("api/[controller]")]
[ApiController]
public class GenerateController : ControllerBase
{
    private readonly ICategoryRepo _categoryRepo;
    private readonly IMapper _mapper;

    public GenerateController(ICategoryRepo categoryRepo, IMapper mapper)
    {
        _categoryRepo = categoryRepo;
        _mapper = mapper;
    }

    [HttpGet("categories")]
    public ActionResult<List<CategoryCreateDto>> Categories()
    {
        Console.WriteLine("--> Generate categories");

        string json = System.IO.File.ReadAllText("Config/categories.json");

        List<CategoryCreateDto>? categoryCreateDtos = JsonSerializer.Deserialize<List<CategoryCreateDto>>(json);

        List<Category> categories = _mapper.Map<List<Category>>(categoryCreateDtos);
        
        _categoryRepo.CreateRange(categories);

        _categoryRepo.Save();

        return Ok(categoryCreateDtos);
    }
    
    [HttpGet("categories/children")]
    public ActionResult<List<CategoryCreateDto>> CategoriesChildren()
    {
        Console.WriteLine("--> Generate categories children");

        string json = System.IO.File.ReadAllText("Config/categories_child.json");

        List<CategoryCreateDto>? categoryCreateDtos = JsonSerializer.Deserialize<List<CategoryCreateDto>>(json);

        List<Category> categories = _mapper.Map<List<Category>>(categoryCreateDtos);
        
        _categoryRepo.CreateRange(categories);

        _categoryRepo.Save();

        return Ok(categoryCreateDtos);
    }
}