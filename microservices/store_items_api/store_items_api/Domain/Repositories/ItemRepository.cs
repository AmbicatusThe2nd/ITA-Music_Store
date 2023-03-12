using store_items_api.Domain.Models;


namespace store_items_api.Domain.Repositories
{
    public interface IItemRepository
    {
        Task<IEnumerable<ItemModel>> GetAllAsync();
        Task<ItemModel> GetAsync(string id);
        Task AddAsync(ItemModel item);
        Task UpdateAsync(string id, ItemModel item);
        Task DeleteAsync(string id);
    }
}
