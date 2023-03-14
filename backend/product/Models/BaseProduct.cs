using System.ComponentModel.DataAnnotations;

namespace product.Models;

public class BaseProduct
{
    [Key]
    [Required]
    public int Id { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public DateTime? DeletedAt { get; set; }
}