using product.Models;

namespace product.Dtos;

public class CategoryReadDto : BaseReadDto
{
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public int? ParentId { get; set; }

    public List<CategoryReadDto> Children { get; set; } = new List<CategoryReadDto>();
}