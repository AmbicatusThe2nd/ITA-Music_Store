using store_items_api.Domain.Models;


namespace store_items_api.Domain.Services
{
    public interface IItemService
    {
        Task<IEnumerable<ItemModel>> GetAllAsync();
        Task<ItemModel> GetAsync(int id);
        Task<ItemModel> AddAsync(ItemModel item);
        Task<ItemModel> UpdateAsync(ItemModel item);
        Task DeleteAsync(int id);
    }
}
