package com.example.store_orders_api.application.controllers

import com.example.store_orders_api.domain.models.OrderModel
import com.example.store_orders_api.domain.services.IOrderService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/orders")
class OrderController(@Autowired val orderService: IOrderService) {
    @GetMapping("")
    suspend fun getAllOrders(): ResponseEntity<List<OrderModel>> {
        return ResponseEntity.ok(orderService.getAllAsync())
    }
}