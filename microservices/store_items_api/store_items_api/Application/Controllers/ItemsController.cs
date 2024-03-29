﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using store_items_api.Domain.Services;
using store_items_api.Domain.Models;

namespace store_items_api.Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IItemService _itemService;

        public ItemsController(IItemService itemService) 
        { 
            _itemService = itemService; 
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemModel>>> GetAllItems()
        {
            try
            {
                var items = await _itemService.GetAllAsync();
                var itemModels = new List<ItemModel>();

                foreach (var item in items)
                {
                    itemModels.Add(new ItemModel
                    {
                        Id = item.Id,
                        name = item.name,
                        price = item.price,
                        description = item.description,
                        image = item.image,
                        manufacturer = item.manufacturer,
                        type = item.type,
                        sku = item.sku,
                        status = item.status,
                        featured = item.featured,
                        catalog_visibility = item.catalog_visibility,
                        tax_class = item.tax_class,
                        tax_status = item.tax_status,
                        stock_status = item.stock_status,
                        backorders = item.backorders,
                        sale_price = item.sale_price,
                        category_ids = item.category_ids,
                    });
                }

                return Ok(itemModels);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ItemModel>> GetItem(string id)
        {
            try
            {
                var item = await _itemService.GetAsync(id);

                if(item == null)
                {
                    return BadRequest();
                }

                return Ok(item);
            }
            catch(Exception ex) 
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> PostItem([FromBody] ItemModel item)
        {
            try
            {
                await _itemService.AddAsync(item);

                return Ok(item);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutItem(string id, [FromBody] ItemModel toUpdateItem)
        {
            try
            {
                var item = _itemService.GetAsync(id);

                if(item == null)
                {
                    return BadRequest();
                }

                await _itemService.UpdateAsync(id, toUpdateItem);

                return Ok(item);

            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            try
            {
                var item = await _itemService.GetAsync(id);

                if(item == null)
                {
                    return BadRequest();
                }

                await _itemService.DeleteAsync(id);

                return Ok(item);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
