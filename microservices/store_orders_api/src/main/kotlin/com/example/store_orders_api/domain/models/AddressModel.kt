package com.example.store_orders_api.domain.models

data class AddressModel(
    var street: String = "",
    var city: String = "",
    var state: String = "",
    var zip: String = "",
    var country: String = "",
)
