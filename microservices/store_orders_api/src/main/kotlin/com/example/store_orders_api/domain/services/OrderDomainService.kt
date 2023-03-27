package com.example.store_orders_api.domain.services

import com.example.store_orders_api.domain.models.OrderModel
import com.example.store_orders_api.domain.repositories.IOrderRepository
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Service

@Service
class OrderDomainService(@Qualifier("mongoDbOrderRepository") private val orderRepository: IOrderRepository) : IOrderService {

    override suspend fun getAllAsync(): List<OrderModel>? {
        return orderRepository.getAllAsync()
    }

    override suspend fun getAsync(id: String): OrderModel? {
        return orderRepository.getAsync(id)
    }

    override suspend fun addAsync(order: OrderModel) {
        orderRepository.addAsync(order)
    }

    override suspend fun updateAsync(id: String, order: OrderModel) {
        orderRepository.updateAsync(id, order)
    }

    override suspend fun deleteAsync(id: String) {
        orderRepository.deleteAsync(id)
    }
}