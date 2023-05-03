using product.Dtos;
using product.Models;

namespace product.Repositories;

public interface IProductImageRepo
{
    bool Save();

    IEnumerable<ProductImage> GetAll(int productId);

    ProductImage? GetById(int productId, int id);

    void Create(int productId, ProductImage productImage);

    void Update(ProductImage productImage, ProductImageCreateDto productImageCreateDto);

    void Delete(ProductImage productImage);
}