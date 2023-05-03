using AutoMapper;
using product.Dtos;
using product.Models;

namespace product.Profiles;

public class CategoryProfile : Profile
{
    public CategoryProfile()
    {
        // Source -> Target
        CreateMap<Category, CategoryReadDto>();
        
        CreateMap<CategoryCreateDto, Category>();
    }
}