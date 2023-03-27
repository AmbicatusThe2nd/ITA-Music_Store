package com.example.store_orders_api.insfrastructure

import com.example.store_orders_api.domain.models.OrderModel
import com.example.store_orders_api.domain.repositories.IOrderRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class MongoDbOrderRepository(@Autowired val mongoTemplate: IMongoDbConfiguration): IOrderRepository {
    override suspend fun getAllAsync(): List<OrderModel>? {
        return mongoTemplate.findAll()
    }

    override suspend fun getAsync(id: String): OrderModel? {
        return withContext(Dispatchers.IO) {
            mongoTemplate.findById(id)
        }.orElse(null)
    }

    override suspend fun addAsync(order: OrderModel) {
        withContext(Dispatchers.IO) {
            mongoTemplate.save(order)
        }
    }

    override suspend fun updateAsync(id: String, order: OrderModel) {
        withContext(Dispatchers.IO) {
            mongoTemplate.save(order)
        }
    }

    override suspend fun deleteAsync(id: String) {
        withContext(Dispatchers.IO) {
            mongoTemplate.deleteById(id)
        }
    }
}