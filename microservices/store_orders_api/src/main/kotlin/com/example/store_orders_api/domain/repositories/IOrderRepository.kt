package com.example.store_orders_api.domain.repositories

import com.example.store_orders_api.domain.models.OrderModel
import org.springframework.stereotype.Repository

@Repository
interface IOrderRepository {
    suspend fun getAllAsync(): List<OrderModel>?
    suspend fun  getAsync(id: String): OrderModel?
    suspend fun  addAsync(order: OrderModel)
    suspend fun  updateAsync(id: String ,order: OrderModel)
    suspend fun  deleteAsync(id: String)
}