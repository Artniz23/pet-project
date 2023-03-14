using product.Dtos;
using product.Models;

namespace product.Repositories;

public interface IProductRepo
{
    bool Save();

    IEnumerable<Product> GetAll();

    Product? GetById(int id);

    void Create(Product product);

    void Update(Product product, ProductCreateDto productCreateDto);

    void Delete(Product product);
}