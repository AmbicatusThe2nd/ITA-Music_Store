package com.example.store_orders_api

import com.example.store_orders_api.application.controllers.OrderController
import com.example.store_orders_api.domain.repositories.IOrderRepository
import com.example.store_orders_api.domain.services.IOrderService
import com.example.store_orders_api.domain.services.OrderDomainService
import com.example.store_orders_api.insfrastructure.IMongoDbConfiguration
import com.example.store_orders_api.insfrastructure.MongoDbOrderRepository
import io.swagger.v3.oas.annotations.OpenAPIDefinition
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableAsync
import org.slf4j.LoggerFactory
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories


@SpringBootApplication
@OpenAPIDefinition
@EnableMongoRepositories(basePackageClasses = [
	MongoDbOrderRepository::class,
	IMongoDbConfiguration::class,
	OrderDomainService::class,
	IOrderService::class,
	IOrderRepository::class,
	OrderController::class,
	MongoRepository::class
	])
class StoreOrdersApiApplication
// private val logger = LoggerFactory.getLogger(StoreOrdersApiApplication::class.java)

fun main(args: Array<String>) {
	runApplication<StoreOrdersApiApplication>(*args)
}
