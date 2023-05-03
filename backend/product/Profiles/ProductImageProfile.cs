using AutoMapper;
using product.Dtos;
using product.Models;

namespace product.Profiles;

public class ProductImageProfile : Profile
{
    public ProductImageProfile()
    {
        // Source -> Target
        CreateMap<ProductImage, ProductImageReadDto>();
        
        CreateMap<ProductImageCreateDto, ProductImage>();
    }
}