package com.example.store_orders_api.domain.models

data class ItemModel(
    var id: String?,
    var name: String = "",
    var price: Double = 0.0,
    var quintity: Int = 0,
)
