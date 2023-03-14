FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["product.csproj", "./"]
RUN dotnet restore "./product.csproj"
COPY . .
RUN dotnet build "product.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "product.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "product.dll"]