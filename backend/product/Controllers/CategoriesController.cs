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
public class CategoriesController : ControllerBase
{
    private readonly ICategoryRepo _categoryRepo;
    private readonly IMapper _mapper;

    public CategoriesController(ICategoryRepo categoryRepo, IMapper mapper)
    {
        _categoryRepo = categoryRepo;
        _mapper = mapper;
    }

    [HttpGet]
    public ActionResult<IEnumerable<CategoryReadDto>> GetAll()
    {
        Console.WriteLine("--> Getting Categories");

        IEnumerable<Category> categories = _categoryRepo.GetParents();

        IEnumerable<CategoryReadDto> categoryReadDtos = _mapper.Map<IEnumerable<CategoryReadDto>>(categories);

        return Ok(categoryReadDtos);
    }

    [HttpGet("{id}", Name = "GetCategoryById")]
    public ActionResult<CategoryReadDto> GetById(int id)
    {
        Category? category = _categoryRepo.GetById(id);

        if (category == null)
        {
            return NotFound();
        }

        CategoryReadDto categoryReadDto = _mapper.Map<CategoryReadDto>(category);

        return Ok(categoryReadDto);
    }

    [HttpPost]
    public ActionResult<CategoryReadDto> Create(CategoryCreateDto categoryCreateDto)
    {
        Category category = _mapper.Map<Category>(categoryCreateDto);

        _categoryRepo.Create(category);

        _categoryRepo.Save();

        CategoryReadDto categoryReadDto = _mapper.Map<CategoryReadDto>(category);

        return CreatedAtRoute(
            "GetCategoryById",
            new {Id = categoryReadDto.Id},
            categoryReadDto
        );
    }

    [HttpPut("{id}")]
    public ActionResult<CategoryReadDto> Update(int id, [FromBody] CategoryCreateDto categoryCreateDto)
    {
        Category? category = _categoryRepo.GetById(id);

        if (category == null)
        {
            return NotFound();
        }
        
        _categoryRepo.Update(category, categoryCreateDto);

        _categoryRepo.Save();

        CategoryReadDto categoryReadDto = _mapper.Map<CategoryReadDto>(category);
        
        return CreatedAtRoute(
            "GetCategoryById",
            new {Id = categoryReadDto.Id},
            categoryReadDto
        );
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        Category? category = _categoryRepo.GetById(id);

        if (category == null)
        {
            return NotFound();
        }
        
        _categoryRepo.Delete(category);

        _categoryRepo.Save();

        return NoContent();
    }
}