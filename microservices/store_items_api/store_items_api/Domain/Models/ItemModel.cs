using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace store_items_api.Domain.Models
{
    public class ItemModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? name { get; set; }
        public double price { get; set; }
        public string? description { get; set; }
        public string? color { get; set; }
        public string? category { get; set; }
        public string? subcategory { get; set; }
        public string? type { get; set; }
        public string? manufacturer { get; set; }
        public double discount { get; set; }
    }
}
