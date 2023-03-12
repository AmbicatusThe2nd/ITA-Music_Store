﻿using store_items_api.Domain.Models;
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

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<ItemModel>> GetAllAsync()
        {
            return await _itemRepository.GetAllAsync();
        }

        public Task<ItemModel> GetAsync(string id)
        {
            return _itemRepository.GetAsync(id);
        }

        public Task<ItemModel> UpdateAsync(ItemModel item)
        {
            throw new NotImplementedException();
        }
    }
}