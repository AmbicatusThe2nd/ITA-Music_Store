﻿namespace store_items_api.Infrastructure
{
    public class MongoDbConfiguration
    {
        public string? ConnectionString { get; set; }
        public string? DatabaseName { get; set; }
        public string? CollectionName { get; set; }
    }
}
