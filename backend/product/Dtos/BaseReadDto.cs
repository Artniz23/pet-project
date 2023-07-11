namespace product.Dtos;

public class BaseReadDto
{
    public int Id { get; set; }
    
    public DateTimeOffset? CreatedAt { get; set; }

    public DateTimeOffset? UpdatedAt { get; set; }

    public DateTimeOffset? DeletedAt { get; set; }
}