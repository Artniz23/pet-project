using product.Data;
using product.Dtos;
using product.Models;

namespace product.Repositories;

public class ProductRepo: IProductRepo
{
    private readonly AppDbContext _context;

    public ProductRepo(AppDbContext context)
    {
        _context = context;
    }

    public bool Save()
    {
        int changes = _context.SaveChanges();

        return changes >= 0;
    }

    public IEnumerable<Product> GetAll()
    {
        return _context.Products.ToList();
    }

    public Product? GetById(int id)
    {
        return _context.Products.FirstOrDefault(product => product.Id == id);
    }

    public void Create(Product product)
    {
        _context.Products.Add(product);
    }

    public void Update(Product product, ProductCreateDto productCreateDto)
    {
        product.Name = productCreateDto.Name;
        product.Description = productCreateDto.Description;
        product.SKU = productCreateDto.SKU;
        product.Price = productCreateDto.Price;
        product.CategoryId = productCreateDto.CategoryId;
        
        _context.Products.Update(product);
    }

    public void Delete(Product product)
    {
        product.DeletedAt = DateTime.UtcNow;
        
        _context.Products.Update(product);
    }
}