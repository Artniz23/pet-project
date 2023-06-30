namespace product.Extensions;

public static class EnvironmentExtension
{
    private static readonly string Testing = "Test";
    
    public static bool IsTesting(this IHostEnvironment hostEnvironment)
    {
        if (hostEnvironment == null)
        {
            throw new ArgumentNullException(nameof(hostEnvironment));
        }

        return hostEnvironment.IsEnvironment(Testing);
    }
}