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
public class ProductsController : ControllerBase
{
    private readonly IProductRepo _productRepo;
    private readonly IMapper _mapper;

    public ProductsController(IProductRepo productRepo, IMapper mapper)
    {
        _productRepo = productRepo;
        _mapper = mapper;
    }

    [HttpGet]
    public ActionResult<IEnumerable<ProductReadDto>> GetAll()
    {
        Console.WriteLine("--> Getting Products");

        IEnumerable<Product> products = _productRepo.GetAll();

        IEnumerable<ProductReadDto> productReadDtos = _mapper.Map<IEnumerable<ProductReadDto>>(products);

        return Ok(productReadDtos);
    }

    [HttpGet("{id}", Name = "GetProductById")]
    public ActionResult<ProductReadDto> GetById(int id)
    {
        Product? product = _productRepo.GetById(id);

        if (product == null)
        {
            return NotFound();
        }

        ProductReadDto productReadDto = _mapper.Map<ProductReadDto>(product);

        return Ok(productReadDto);
    }

    [HttpPost]
    public ActionResult<ProductReadDto> Create(ProductCreateDto productCreateDto)
    {
        Product product = _mapper.Map<Product>(productCreateDto);
        
        _productRepo.Create(product);

        _productRepo.Save();

        ProductReadDto productReadDto = _mapper.Map<ProductReadDto>(product);

        return CreatedAtRoute(
            "GetProductById",
            new {Id = productReadDto.Id},
            productReadDto
        );
    }

    [HttpPut("{id}")]
    public ActionResult<ProductReadDto> Update(int id, [FromBody] ProductCreateDto productCreateDto)
    {
        Product? product = _productRepo.GetById(id);

        if (product == null)
        {
            return NotFound();
        }

        _productRepo.Update(product, productCreateDto);

        _productRepo.Save();

        ProductReadDto productReadDto = _mapper.Map<ProductReadDto>(product);
        
        return CreatedAtRoute(
            "GetProductById",
            new {Id = productReadDto.Id},
            productReadDto
        );
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        Product? product = _productRepo.GetById(id);

        if (product == null)
        {
            return NotFound();
        }
        
        _productRepo.Delete(product);

        _productRepo.Save();

        return NoContent();
    }
}