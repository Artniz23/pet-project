using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using product.Dtos;
using product.Models;
using product.Repositories;

namespace product.Controllers;

[EnableCors("AllowAll")]
[Route("api/products/{productId}/[controller]")]
[ApiController]
public class ProductImagesController : ControllerBase
{
    private readonly IProductImageRepo _productImageRepo;
    private readonly IMapper _mapper;

    public ProductImagesController(IProductImageRepo productImageRepo, IMapper mapper)
    {
        _productImageRepo = productImageRepo;
        _mapper = mapper;
    }

    [HttpGet]
    public ActionResult<IEnumerable<ProductImageReadDto>> GetAll(int productId)
    {
        Console.WriteLine("--> Getting ProductImages");

        IEnumerable<ProductImage> productImages = _productImageRepo.GetAll(productId);

        IEnumerable<ProductImageReadDto> productImageReadDtos = _mapper.Map<IEnumerable<ProductImageReadDto>>(productImages);

        return Ok(productImageReadDtos);
    }

    [HttpGet("{id}", Name = "GetByIdForProduct")]
    public ActionResult<ProductImageReadDto> GetByIdForProduct(int productId, int id)
    {
        ProductImage? productImage = _productImageRepo.GetById(productId, id);

        if (productImage == null)
        {
            return NotFound();
        }

        ProductImageReadDto productImageReadDto = _mapper.Map<ProductImageReadDto>(productImage);

        return Ok(productImageReadDto);
    }

    [HttpPost]
    public ActionResult<ProductImageReadDto> Create(int productId, [FromBody] ProductImageCreateDto productImageCreateDto)
    {
        ProductImage productImage = _mapper.Map<ProductImage>(productImageCreateDto);
        
        _productImageRepo.Create(productId, productImage);

        _productImageRepo.Save();

        ProductImageReadDto productImageReadDto = _mapper.Map<ProductImageReadDto>(productImage);

        return CreatedAtRoute(
            nameof(GetByIdForProduct),
            new
            {
                productId = productId,
                Id = productImageReadDto.Id
            },
            productImageReadDto
        );
    }

    [HttpPut("{id}")]
    public ActionResult<ProductImageReadDto> Update(int productId, int id, [FromBody] ProductImageCreateDto productImageCreateDto)
    {
        ProductImage? productImage = _productImageRepo.GetById(productId, id);

        if (productImage == null)
        {
            return NotFound();
        }
        
        _productImageRepo.Update(productImage, productImageCreateDto);

        _productImageRepo.Save();

        ProductImageReadDto productImageReadDto = _mapper.Map<ProductImageReadDto>(productImage);

        return CreatedAtRoute(
            nameof(GetByIdForProduct),
            new
            {
                productId = productId,
                Id = productImageReadDto.Id
            },
            productImageReadDto
        );
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(int productId, int id)
    {
        ProductImage? productImage = _productImageRepo.GetById(productId, id);

        if (productImage == null)
        {
            return NotFound();
        }
        
        _productImageRepo.Delete(productImage);

        _productImageRepo.Save();

        return NoContent();
    }
}