package com.example.store_orders_api.application.controllers

import com.example.store_orders_api.domain.models.OrderModel
import com.example.store_orders_api.domain.services.IOrderService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

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

    @PostMapping("")
    suspend fun postOrder(@RequestBody order: OrderModel): ResponseEntity<OrderModel> {
        return try {
            if (order.costumerEmail.isNullOrEmpty() || order.customerName.isNullOrEmpty()) {
                throw IllegalArgumentException("Incomplete order object")
            }
            orderService.addAsync(order)
            ResponseEntity.ok(order)
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    @PutMapping("/{id}")
    suspend fun putOrder(@PathVariable id: String, @RequestBody order: OrderModel): ResponseEntity<OrderModel> {
        return try {
            orderService.getAsync(id) ?: return ResponseEntity.notFound().build()
            orderService.updateAsync(id, order)
            ResponseEntity.ok(order)
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    @DeleteMapping("/{id}")
    suspend fun deleteOrder(@PathVariable id: String): ResponseEntity<Unit> {
        return try {
            orderService.getAsync(id) ?: return ResponseEntity.notFound().build()
            orderService.deleteAsync(id)
            ResponseEntity.ok().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

}