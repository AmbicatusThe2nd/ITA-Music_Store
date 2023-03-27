package com.example.store_orders_api.application.controllers

import com.example.store_orders_api.domain.models.OrderModel
import com.example.store_orders_api.domain.services.IOrderService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/orders")
class OrderController(@Qualifier("orderDomainService") @Autowired val orderService: IOrderService) {
    @GetMapping("")
    suspend fun getAllOrders(): ResponseEntity<List<OrderModel>> {
        return try {
            ResponseEntity.ok(orderService.getAllAsync())
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    @GetMapping("/{id}")
    suspend fun getOrder(@PathVariable id: String): ResponseEntity<OrderModel> {
        return try {
            val order: OrderModel? = orderService.getAsync(id)
            if (order != null) {
                ResponseEntity.ok(order)
            } else {
                ResponseEntity.notFound().build()
            }
        } catch (e: Exception) {
            ResponseEntity.notFound().build()
        }
    }

}