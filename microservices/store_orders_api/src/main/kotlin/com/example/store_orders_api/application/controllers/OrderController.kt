package com.example.store_orders_api.application.controllers

import com.example.store_orders_api.domain.models.OrderModel
import com.example.store_orders_api.domain.services.IOrderService
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/orders")
class OrderController(private val orderService: IOrderService) {

    private val logger = LoggerFactory.getLogger(OrderController::class.java)

    @GetMapping("")
    suspend fun getAllOrders(): ResponseEntity<List<OrderModel>> {
        logger.info("Getting all orders")
        return try {
            ResponseEntity.ok(orderService.getAllAsync())
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    @GetMapping("/{id}")
    suspend fun getOrder(@PathVariable id: String): ResponseEntity<OrderModel> {
        logger.info("Getting order with id: $id")
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
        logger.info("Posting order with id: ${order.id}")
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
        logger.info("Putting order with id: $id")
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
        logger.info("Deleting order with id: $id")
        return try {
            orderService.getAsync(id) ?: return ResponseEntity.notFound().build()
            orderService.deleteAsync(id)
            ResponseEntity.ok().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

}