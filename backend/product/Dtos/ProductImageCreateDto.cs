using System.ComponentModel.DataAnnotations;
using product.Models;

namespace product.Dtos;

public class ProductImageCreateDto
{
    [Required] 
    public string Name { get; set; }

    [Required] 
    public string Alt { get; set; }

    [Required] 
    public string Url { get; set; }
}