package com.example.store_orders_api

import com.example.store_orders_api.application.controllers.OrderController
import com.example.store_orders_api.domain.models.OrderModel
import com.example.store_orders_api.domain.services.IOrderService
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.BDDMockito
import org.mockito.BDDMockito.given
import org.mockito.Mock
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.HttpStatus
import org.junit.jupiter.api.Test
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc

@SpringBootTest
class StoreOrdersApiApplicationTests {

	@Autowired
	private lateinit var orderController: OrderController

	@Mock
	private lateinit var orderService: IOrderService

	/*
	@Test
	fun shouldReturnAllOrders() = runBlocking {
		val order1 = OrderModel("1L", "order1")
		val order2 = OrderModel("2L", "order2")
		val order3 = OrderModel("3L", "order3")
		val orders = listOf(order1, order2, order3)
		given(orderService.getAllAsync()).willReturn(orders)

		val response = orderController.getAllOrders()

		assertEquals(HttpStatus.OK, response.statusCode)
	}
	 */

	@Test
	fun shouldReturnNotFoundForNonexistentOrderId() = runBlocking {
		val orderId = "1L"
		given(orderService.getAsync(orderId)).willReturn(null)

		val response = orderController.getOrder(orderId)

		assertEquals(HttpStatus.NOT_FOUND, response.statusCode)
	}

	@Test
	fun shouldReturnInternalServerErrorForExceptionPost() = runBlocking {
		val order = OrderModel(null, "test order")
		given(orderService.addAsync(order)).willThrow(RuntimeException())

		val response = orderController.postOrder(order)

		assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.statusCode)
	}

	/*
	@Test
	fun shouldReturnInternalServerErrorForExceptionDelete() = runBlocking {
		val orderId = "1L"
		given(orderService.getAsync(orderId)).willThrow(RuntimeException())

		val response = orderController.deleteOrder(orderId)

		assertEquals(HttpStatus.NOT_FOUND, response.statusCode)
	}
	*/
}