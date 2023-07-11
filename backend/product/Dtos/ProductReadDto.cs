namespace product.Dtos;

public class ProductReadDto : BaseReadDto
{
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public decimal Price { get; set; }
    
    public int CategoryId { get; set; }
}