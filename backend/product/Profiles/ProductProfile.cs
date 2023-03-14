using AutoMapper;
using product.Dtos;
using product.Models;

namespace product.Profiles;

public class ProductProfile : Profile
{
    public ProductProfile()
    {
        // Source -> Target
        CreateMap<Product, ProductReadDto>();

        CreateMap<ProductCreateDto, Product>();
    }
}