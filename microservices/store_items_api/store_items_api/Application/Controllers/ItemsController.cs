using Microsoft.AspNetCore.Http;
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
                        color = item.color,
                        category = item.category,
                        type = item.type,
                        manufacturer = item.manufacturer,
                        discount = item.discount,
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
    }
}
