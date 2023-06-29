using product.Dtos;
using product.Models;

namespace product.Repositories;

public interface ICategoryRepo
{
    bool Save();

    IEnumerable<Category> GetAll();
    
    IEnumerable<Category> GetParents();

    Category? GetById(int id);

    void Create(Category category);
    
    void CreateRange(IEnumerable<Category> categories);

    void Update(Category category, CategoryCreateDto categoryCreateDto);

    void Delete(Category category);
}