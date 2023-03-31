package com.example.sensor_api.domain.models

import com.fasterxml.jackson.annotation.JsonProperty

data class StringVibrationAmplitude(
    @field:JsonProperty("LOW_1")
    var low1 : Double = 0.0,
    @field:JsonProperty("LOW_2")
    var low2 : Double = 0.0,
    @field:JsonProperty("LOW_3")
    var low3 : Double = 0.0,
    @field:JsonProperty("HIGH_3")
    var high3 : Double = 0.0,
    @field:JsonProperty("HIGH_2")
    var high2 : Double = 0.0,
    @field:JsonProperty("HIGH_1")
    var high1 : Double = 0.0,
)
