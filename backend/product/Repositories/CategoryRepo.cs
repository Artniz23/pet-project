using product.Data;
using product.Dtos;
using product.Models;

namespace product.Repositories;

public class CategoryRepo : ICategoryRepo
{
    private readonly AppDbContext _context;

    public CategoryRepo(AppDbContext context)
    {
        _context = context;
    }
    
    public bool Save()
    {
        int changes = _context.SaveChanges();

        return changes >= 0;
    }

    public IEnumerable<Category> GetAll()
    {
        return _context.Categories.ToList();
    }

    public Category? GetById(int id)
    {
        return _context.Categories.FirstOrDefault(category => category.Id == id);
    }

    public void Create(Category category)
    {
        _context.Categories.Add(category);
    }

    public void Update(Category category, CategoryCreateDto categoryCreateDto)
    {
        category.Name = categoryCreateDto.Name;
        category.Description = categoryCreateDto.Description;
        category.ParentId = categoryCreateDto.ParentId;

        _context.Categories.Update(category);
    }

    public void Delete(Category category)
    {
        category.DeletedAt = DateTime.UtcNow;

        _context.Categories.Update(category);
    }
}