using System.ComponentModel.DataAnnotations;
using product.Models;

namespace product.Dtos;

public class CategoryCreateDto
{
    [Required]
    public string Name { get; set; }
    
    [Required]
    public string Description { get; set; }
    
    public int? ParentId { get; set; }
}