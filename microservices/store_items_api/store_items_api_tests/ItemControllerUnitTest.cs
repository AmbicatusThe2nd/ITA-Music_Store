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
                    price = "200.00 €",
                    description = "Lorem ipsum",
                    image = "slika.jpg",
                    manufacturer = "Flight",
                    type = "Electric",
                    sku = "C1544",
                    status = "Availible",
                    featured = "1",
                    catalog_visibility = "visible",
                    tax_status = "taxable",
                    tax_class = "standard",
                    stock_status = "1",
                    backorders = "0",
                    sale_price = "200.00 €",
                    category_ids = "Kitare > Electrične kitare",
                },
                new ItemModel()
                {
                    Id = "2",
                    name = "Flight guitar",
                    price = "300.00 €",
                    image = "slika.jpg",
                    manufacturer = "Flight",
                    type = "Electric",
                    sku = "C1544",
                    status = "Availible",
                    featured = "1",
                    catalog_visibility = "visible",
                    tax_status = "taxable",
                    tax_class = "standard",
                    stock_status = "1",
                    backorders = "0",
                    sale_price = "200.00 €",
                    category_ids = "Kitare > Electrične kitare",
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
                price = "300.00 €",
                description = "Lorem ipsum",
                image = "slika.jpg",
                manufacturer = "Flight",
                type = "Electric",
                sku = "C1544",
                status = "Availible",
                featured = "1",
                catalog_visibility = "visible",
                tax_status = "taxable",
                tax_class = "standard",
                stock_status = "1",
                backorders = "0",
                sale_price = "200.00 €",
                category_ids = "Kitare > Electrične kitare",
            };

            _mockItemService.Setup(service => service.GetAsync(itemId)).ReturnsAsync(itemModel);

            var result = await _itemsController.GetItem(itemId);

            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var item = Assert.IsType<ItemModel>(okResult.Value);
            Assert.Equal(itemModel.Id, item.Id);
            Assert.Equal(itemModel.name, item.name);
            Assert.Equal(itemModel.price, item.price);
            Assert.Equal(itemModel.description, item.description);
            Assert.Equal(itemModel.image, item.image);
            Assert.Equal(itemModel.manufacturer, item.manufacturer);
            Assert.Equal(itemModel.type, item.type);
            Assert.Equal(itemModel.sku, item.sku);
            Assert.Equal(itemModel.manufacturer, item.manufacturer);
            Assert.Equal(itemModel.status, item.status);
            Assert.Equal(itemModel.featured, item.featured);
            Assert.Equal(itemModel.catalog_visibility, item.catalog_visibility);
            Assert.Equal(itemModel.tax_status, item.tax_status);
            Assert.Equal(itemModel.tax_class, item.tax_class);
            Assert.Equal(itemModel.stock_status, item.stock_status);
            Assert.Equal(itemModel.backorders, item.backorders);
            Assert.Equal(itemModel.sale_price, item.sale_price);
            Assert.Equal(itemModel.category_ids, item.category_ids);
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
                price = "300.00 €",
                description = "Lorem ipsum",
                image = "slika.jpg",
                manufacturer = "Flight",
                type = "Electric",
                sku = "C1544",
                status = "Availible",
                featured = "1",
                catalog_visibility = "visible",
                tax_status = "taxable",
                tax_class = "standard",
                stock_status = "1",
                backorders = "0",
                sale_price = "200.00 €",
                category_ids = "Kitare > Electrične kitare",
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
                price = "300.00 €",
                image = "slika.jpg",
                manufacturer = "Flight",
                type = "Electric",
                sku = "C1544",
                status = "Availible",
                featured = "1",
                catalog_visibility = "visible",
                tax_status = "taxable",
                tax_class = "standard",
                stock_status = "1",
                backorders = "0",
                sale_price = "200.00 €",
                category_ids = "Kitare > Electrične kitare",
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
