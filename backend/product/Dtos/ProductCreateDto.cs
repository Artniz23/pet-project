using System.ComponentModel.DataAnnotations;

namespace product.Dtos;

public class ProductCreateDto
{
    [Required]
    public string Name { get; set; }
    
    [Required]
    public string Description { get; set; }
    
    [Required]
    public string SKU { get; set; }
    
    [Required]
    public decimal Price { get; set; }
    
    [Required]
    public int CategoryId { get; set; }
}