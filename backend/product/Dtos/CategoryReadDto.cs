using product.Models;

namespace product.Dtos;

public class CategoryReadDto
{
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public int? ParentId { get; set; }

    public ICollection<CategoryReadDto> Children { get; set; } = new List<CategoryReadDto>();
    
    public ICollection<ProductReadDto> Products { get; set; } = new List<ProductReadDto>();
}