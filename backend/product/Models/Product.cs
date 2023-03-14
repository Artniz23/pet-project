using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace product.Models;

public class Product : BaseProduct
{
    [Required]
    public string Name { get; set; }
    
    [Required]
    public string Description { get; set; }
    
    [Required]
    public string SKU { get; set; }
    
    [Required]
    [Column(TypeName = "decimal(18, 2)")]
    public decimal Price { get; set; }
}