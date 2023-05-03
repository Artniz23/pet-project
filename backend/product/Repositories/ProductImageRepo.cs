using product.Data;
using product.Dtos;
using product.Models;

namespace product.Repositories;

public class ProductImageRepo : IProductImageRepo
{
    private readonly AppDbContext _context;

    public ProductImageRepo(AppDbContext context)
    {
        _context = context;
    }

    public bool Save()
    {
        int changes = _context.SaveChanges();

        return changes >= 0;
    }

    public IEnumerable<ProductImage> GetAll(int productId)
    {
        return _context.ProductImages
            .Where(productImage => productImage.ProductId == productId);
    }

    public ProductImage? GetById(int productId, int id)
    {
        return _context.ProductImages
            .Where(productImage => productImage.ProductId == productId)
            .FirstOrDefault(productImage => productImage.Id == id);
    }

    public void Create(int productId, ProductImage productImage)
    {
        productImage.ProductId = productId;
        
        _context.ProductImages.Add(productImage);
    }

    public void Update(ProductImage productImage, ProductImageCreateDto productImageCreateDto)
    {
        productImage.Name = productImageCreateDto.Name;
        productImage.Alt = productImageCreateDto.Alt;
        productImage.Url = productImageCreateDto.Url;
        
        _context.ProductImages.Update(productImage);
    }

    public void Delete(ProductImage productImage)
    {
        productImage.DeletedAt = DateTime.UtcNow;

        _context.ProductImages.Update(productImage);
    }
}