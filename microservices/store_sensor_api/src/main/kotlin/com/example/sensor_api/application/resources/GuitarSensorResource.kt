package com.example.sensor_api.application.resources

import com.example.sensor_api.domain.models.SensorModel
import com.example.sensor_api.domain.repositories.SensorRepository
import io.smallrye.mutiny.Uni
import javax.inject.Inject
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces

@Path("/guitar_sensor")
class GuitarSensorResource @Inject constructor(private val sensorRepository: SensorRepository) {
    @GET
    @Produces("application/json")
    fun getGuitarSensor(): Uni<List<SensorModel>> {
        return sensorRepository.findAllSensors()
    }
}