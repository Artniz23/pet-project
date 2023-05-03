using System.ComponentModel.DataAnnotations;

namespace product.Models;

public class ProductImage : BaseProduct
{
    [Required] 
    public string Name { get; set; }

    [Required] 
    public string Alt { get; set; }

    [Required] 
    public string Url { get; set; }
    
    [Required] 
    public int ProductId { get; set; }
    
    public Product Product { get; set; }
}