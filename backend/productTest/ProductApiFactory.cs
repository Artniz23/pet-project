using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using product.Data;
using Testcontainers.MsSql;

namespace productTest;

public class ProductApiFactory : WebApplicationFactory<Program>, IAsyncLifetime
{
    private readonly MsSqlContainer _container = new MsSqlBuilder().Build();

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        base.ConfigureWebHost(builder);
    
        builder.UseEnvironment("Test");
        
        builder.ConfigureTestServices(services =>
        {
            services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(_container.GetConnectionString());
            });
        });
    }
    
    public async Task InitializeAsync() => await _container.StartAsync();

    public new async Task DisposeAsync() => await _container.DisposeAsync();
}