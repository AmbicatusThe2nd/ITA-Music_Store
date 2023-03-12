﻿using store_items_api.Domain.Models;


namespace store_items_api.Domain.Services
{
    public interface IItemService
    {
        Task<IEnumerable<ItemModel>> GetAllAsync();
        Task<ItemModel> GetAsync(string id);
        Task AddAsync(ItemModel item);
        Task<ItemModel> UpdateAsync(ItemModel item);
        Task DeleteAsync(int id);
    }
}