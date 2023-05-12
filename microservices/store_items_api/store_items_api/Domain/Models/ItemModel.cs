using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace store_items_api.Domain.Models
{
    //public class ItemModel
    //{
    //    [BsonId]
    //    [BsonRepresentation(BsonType.ObjectId)]
    //    public string? Id { get; set; }
    //    public string? name { get; set; }
    //    public double price { get; set; }
    //    public string? description { get; set; }
    //    public string? color { get; set; }
    //    public string? category { get; set; }
    //    public string? subcategory { get; set; }
    //    public string? type { get; set; }
    //    public string? manufacturer { get; set; }
    //    public double discount { get; set; }
    //}

    public class ItemModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? name { get; set; }
        public string? price { get; set; }
        public string? description { get; set; }
        public string? image { get; set; }
        public string? manufacturer { get; set; }
        public string? type { get; set; }
        public string? sku { get; set; }
        public string? status { get; set; }
        public string? featured { get; set; }
        public string? catalog_visibility { get; set; }
        public string? tax_status { get; set; }
        public string? tax_class { get; set; }
        public string? stock_status { get; set; }
        public string? backorders { get; set; }
        public string? sale_price { get; set; }
        public string? category_ids { get; set; }
    }
}
