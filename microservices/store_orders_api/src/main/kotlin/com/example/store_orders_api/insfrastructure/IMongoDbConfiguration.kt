package com.example.store_orders_api.insfrastructure

import com.example.store_orders_api.domain.models.OrderModel
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.stereotype.Repository

@Repository
interface IMongoDbConfiguration : MongoRepository<OrderModel, String> {
}