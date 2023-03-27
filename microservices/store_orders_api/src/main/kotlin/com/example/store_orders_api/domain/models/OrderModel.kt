package com.example.store_orders_api.domain.models

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "orders")
data class OrderModel(
    @Id
    var id: String = "",
    var costumerName: String = "",
    var costumerEmail: String = "",
    var shippingAddress: AddressModel = AddressModel(),
    var billingAddress: AddressModel = AddressModel(),
    var items: List<ItemModel> = listOf(),
    var total: Double = 0.0,
    var shippingCost: Double = 0.0,
    var shippingMethod: String = "",
)
