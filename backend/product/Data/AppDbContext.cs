using Microsoft.EntityFrameworkCore;
using product.Models;

namespace product.Data;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    public DbSet<ProductImage> ProductImages { get; set; }

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
            baseProduct.CreatedAt = DateTime.UtcNow;
            baseProduct.UpdatedAt = DateTime.UtcNow;
        }

        foreach (BaseProduct baseProduct in updateEntities)
        {
            baseProduct.UpdatedAt = DateTime.UtcNow;
        }

        return base.SaveChanges();
    }
}