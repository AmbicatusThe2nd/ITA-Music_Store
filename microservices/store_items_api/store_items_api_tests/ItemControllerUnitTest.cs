using Xunit;
using store_items_api.Application.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using store_items_api.Domain.Models;
using store_items_api.Domain.Services;
using Moq;

namespace store_items_api_tests
{
    public class ItemControllerUnitTest
    {
        private readonly Mock<IItemService> _mockItemService;
        private readonly ItemsController _itemsController;

        public ItemControllerUnitTest()
        {
            _mockItemService = new Mock<IItemService>();
            _itemsController = new ItemsController(_mockItemService.Object);
        }

        [Fact]
        public async void Get_AllItems_Ok_Result()
        {
            var items = new List<ItemModel>()
            {
                new ItemModel()
                {
                    Id = "1",
                    name = "Flight guitar",
                    price = 300.00,
                    description = "Lorem ipsum",
                    color = "Black",
                    category = "Guitar",
                    subcategory =  "Electric",
                    type =  "Les paul",
                    manufacturer = "Flight",
                    discount = 0.00
                },
                new ItemModel()
                {
                    Id = "2",
                    name = "Flight guitar",
                    price = 300.00,
                    description = "Lorem ipsum",
                    color = "Brown",
                    category = "Guitar",
                    subcategory =  "Electric",
                    type =  "Les paul",
                    manufacturer = "Flight",
                    discount = 0.00
                }
            };

            _mockItemService.Setup(service => service.GetAllAsync()).ReturnsAsync(items);

            var result = await _itemsController.GetAllItems();

            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var testItems = Assert.IsAssignableFrom<IEnumerable<ItemModel>>(okResult.Value);
            Assert.Equal(items.Count, testItems.Count());
        }

        [Fact]
        public async void Get_ItemById_OkResult()
        {
            var itemId = "1";
            var itemModel = new ItemModel()
            {
                Id = itemId,
                name = "Flight guitar",
                price = 300.00,
                description = "Lorem ipsum",
                color = "Brown",
                category = "Guitar",
                subcategory = "Electric",
                type = "Les paul",
                manufacturer = "Flight",
                discount = 0.00
            };

            _mockItemService.Setup(service => service.GetAsync(itemId)).ReturnsAsync(itemModel);

            var result = await _itemsController.GetItem(itemId);

            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var item = Assert.IsType<ItemModel>(okResult.Value);
            Assert.Equal(itemModel.Id, item.Id);
            Assert.Equal(itemModel.name, item.name);
            Assert.Equal(itemModel.price, item.price);
            Assert.Equal(itemModel.description, item.description);
            Assert.Equal(itemModel.color, item.color);
            Assert.Equal(itemModel.category, item.category);
            Assert.Equal(itemModel.type, item.type);
            Assert.Equal(itemModel.subcategory, item.subcategory);
            Assert.Equal(itemModel.manufacturer, item.manufacturer);
            Assert.Equal(itemModel.discount, item.discount);
        }

        [Fact]
        public async void Get_ItemById_BadRequestResult()
        {
            var itemId = "1";

            _mockItemService.Setup(service => service.GetAsync(itemId)).ReturnsAsync((ItemModel)null);

            
            var result = await _itemsController.GetItem(itemId);

           
            Assert.IsType<BadRequestResult>(result.Result);
        }

        [Fact]
        public async void Post_ValidItem_OkResult()
        {
            var itemModel = new ItemModel()
            {
                Id = "1",
                name = "Flight guitar",
                price = 300.00,
                description = "Lorem ipsum",
                color = "Brown",
                category = "Guitar",
                subcategory = "Electric",
                type = "Les paul",
                manufacturer = "Flight",
                discount = 0.00
            };

            var result = await _itemsController.PostItem(itemModel);

            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.IsType<ItemModel>(okResult.Value);
        }

        [Fact]
        public async void Delete_ValidItem_OkResult()
        {
            var itemId = "1";

            var itemModel = new ItemModel()
            {
                Id = itemId,
                name = "Flight guitar",
                price = 300.00,
                description = "Lorem ipsum",
                color = "Brown",
                category = "Guitar",
                subcategory = "Electric",
                type = "Les paul",
                manufacturer = "Flight",
                discount = 0.00
            };

            _mockItemService.Setup(service => service.GetAsync(itemId)).ReturnsAsync(itemModel);

            var result = await _itemsController.Delete(itemId);

            var okResult = Assert.IsType<OkObjectResult>(result);
            var deletedItem = Assert.IsType<ItemModel>(okResult.Value);
            Assert.Equal(itemId, deletedItem.Id);
            _mockItemService.Verify(s => s.DeleteAsync(itemId), Times.Once);
        }

        
    }
}
