package com.example.sensor_api.domain.models

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.PropertyNamingStrategies
import com.fasterxml.jackson.databind.annotation.JsonNaming
import io.quarkus.mongodb.panache.common.MongoEntity

@MongoEntity(collection="guitar_sensor_data")
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy::class)
data class SensorModel(
    var sensor_type: String = "",
    var manufacturer: String = "",
    var model: String = "",
    var serial_number: String = "",
    var timestamp: String = "",
    var notes_per_minute: Int = 0,
    var loudness: Int = 0,
    @field:JsonProperty("string_vibration_amplitude")
    var stringVibrationAmplitude: StringVibrationAmplitude? = StringVibrationAmplitude(),
)