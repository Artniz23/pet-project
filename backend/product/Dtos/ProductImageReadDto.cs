namespace product.Dtos;

public class ProductImageReadDto : BaseReadDto
{
    public string Name { get; set; }
    
    public string Alt { get; set; }
    
    public string Url { get; set; }
}