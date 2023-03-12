using store_items_api.Domain.Models;
using store_items_api.Domain.Repositories;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace store_items_api.Infrastructure
{
    public class MongoDbItemRepository : IItemRepository
    {
        private readonly IMongoCollection<ItemModel> _itemCollection;

        public MongoDbItemRepository(IOptions<MongoDbConfiguration> config)
        {
            var client = new MongoClient(config.Value.ConnectionString);
            var database = client.GetDatabase(config.Value.DatabaseName);
            _itemCollection = database.GetCollection<ItemModel>(config.Value.CollectionName);
        }

        public async Task AddAsync(ItemModel item)
        {
             await _itemCollection.InsertOneAsync(item);
        }

        public async Task DeleteAsync(string id)
        {
            await _itemCollection.DeleteOneAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<ItemModel>> GetAllAsync()
        {
            return await _itemCollection.Find(_ => true).ToListAsync();
        }

        public async Task<ItemModel> GetAsync(string id)
        {
            return await _itemCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task UpdateAsync(string id, ItemModel item)
        {
            await _itemCollection.ReplaceOneAsync(x => x.Id == id, item); 
        }
    }
}
