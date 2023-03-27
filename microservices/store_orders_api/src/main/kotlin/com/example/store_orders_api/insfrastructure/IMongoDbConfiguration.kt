package com.example.store_orders_api.insfrastructure

import com.example.store_orders_api.domain.models.OrderModel
import org.springframework.data.mongodb.repository.MongoRepository

interface IMongoDbConfiguration : MongoRepository<OrderModel, String> {
}