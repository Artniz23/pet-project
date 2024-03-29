﻿using System.ComponentModel.DataAnnotations;

namespace product.Models;

public class BaseProduct
{
    [Key]
    [Required]
    public int Id { get; set; }

    public DateTimeOffset? CreatedAt { get; set; }

    public DateTimeOffset? UpdatedAt { get; set; }

    public DateTimeOffset? DeletedAt { get; set; }
}