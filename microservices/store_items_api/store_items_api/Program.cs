using store_items_api.Authentication;
using store_items_api.Domain.Repositories;
using store_items_api.Domain.Services;
using store_items_api.Infrastructure;
using store_items_api.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<MongoDbConfiguration>(builder.Configuration.GetSection("ConnectionStringsDatabase"));
builder.Services.AddSingleton<IItemRepository, MongoDbItemRepository>();
builder.Services.AddSingleton<IItemService, ItemDomainService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseMiddleware<ApiLogginMiddleware>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseMiddleware<ApiKeyAuthMiddleware>();

app.MapControllers();

app.Run();