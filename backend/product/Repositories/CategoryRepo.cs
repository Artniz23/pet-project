using Microsoft.EntityFrameworkCore;
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

    public IEnumerable<Category> GetParents()
    {
        return _context.Categories.Where(c => c.ParentId == null).Include(c => c.Children).ToList();
    }

    public Category? GetById(int id)
    {
        return _context.Categories.Include((category) => category.Children).FirstOrDefault(category => category.Id == id);
    }

    public void Create(Category category)
    {
        _context.Categories.Add(category);
    }

    public void CreateRange(IEnumerable<Category> categories)
    {
        _context.Categories.AddRange(categories);
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