using product.Models;

namespace product.Dtos;

public class CategoryReadDto
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public int? ParentId { get; set; }

    public ICollection<CategoryReadDto> Children { get; set; } = new List<CategoryReadDto>();
}