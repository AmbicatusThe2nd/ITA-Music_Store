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

        public Task<ItemModel> AddAsync(ItemModel item)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<ItemModel>> GetAllAsync()
        {
            return await _itemRepository.GetAllAsync();
        }

        public Task<ItemModel> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ItemModel> UpdateAsync(ItemModel item)
        {
            throw new NotImplementedException();
        }
    }
}
