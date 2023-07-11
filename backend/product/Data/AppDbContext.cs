using Microsoft.EntityFrameworkCore;
using product.Models;

namespace product.Data;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    
    public DbSet<ProductImage> ProductImages { get; set; }
    
    public DbSet<Category> Categories { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public override int SaveChanges()
    {
        IEnumerable<BaseProduct> newEntities = ChangeTracker.Entries()
            .Where(
                entry => entry.State == EntityState.Added &&
                         entry.Entity != null &&
                         entry.Entity is BaseProduct
            )
            .Select(entry => entry.Entity as BaseProduct);

        IEnumerable<BaseProduct> updateEntities = ChangeTracker.Entries()
            .Where(
                entry => entry.State == EntityState.Modified &&
                         entry.Entity != null &&
                         entry.Entity is BaseProduct
            )
            .Select(entry => entry.Entity as BaseProduct);

        foreach (BaseProduct baseProduct in newEntities)
        {
            baseProduct.CreatedAt = DateTimeOffset.UtcNow;
            baseProduct.UpdatedAt = DateTimeOffset.UtcNow;
        }

        foreach (BaseProduct baseProduct in updateEntities)
        {
            baseProduct.UpdatedAt = DateTimeOffset.UtcNow;
        }

        return base.SaveChanges();
    }
}