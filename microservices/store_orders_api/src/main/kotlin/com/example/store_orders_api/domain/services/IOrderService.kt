package com.example.store_orders_api.domain.services

import com.example.store_orders_api.domain.models.OrderModel
import org.springframework.stereotype.Service

@Service
interface IOrderService {
    suspend fun getAllAsync(): List<OrderModel>?
    suspend fun  getAsync(id: String): OrderModel?
    suspend fun  addAsync(order: OrderModel)
    suspend fun  updateAsync(id: String ,order: OrderModel)
    suspend fun  deleteAsync(id: String)
}