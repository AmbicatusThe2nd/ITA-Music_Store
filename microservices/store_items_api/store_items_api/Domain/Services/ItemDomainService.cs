using store_items_api.Domain.Models;
using store_items_api.Domain.Repositories;

namespace store_items_api.Domain.Services
{
    public class ItemDomainService : IItemService
    {
        private readonly IItemRepository _itemRepository;

        public ItemDomainService(IItemRepository itemRepository) 
        { 
            _itemRepository = itemRepository; 
        }

        public async Task AddAsync(ItemModel item)
        {
             await _itemRepository.AddAsync(item);
        }

        public async Task DeleteAsync(string id)
        {
            await _itemRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<ItemModel>> GetAllAsync()
        {
            return await _itemRepository.GetAllAsync();
        }

        public Task<ItemModel> GetAsync(string id)
        {
            return _itemRepository.GetAsync(id);
        }

        public async Task UpdateAsync(string id, ItemModel item)
        {
            await _itemRepository.UpdateAsync(id, item);
        }
    }
}
