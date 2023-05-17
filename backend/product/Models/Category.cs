using System.ComponentModel.DataAnnotations;

namespace product.Models;

public class Category : BaseProduct
{
    [Required]
    public string Name { get; set; }
    
    [Required]
    public string Description { get; set; }
    
    public int? ParentId { get; set; }
    
    public Category? Parent { get; set; }

    public ICollection<Category> Children { get; set; } = new List<Category>();
}