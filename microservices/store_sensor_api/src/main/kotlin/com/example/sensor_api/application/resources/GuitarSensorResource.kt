package com.example.sensor_api.application.resources

import com.example.sensor_api.domain.models.SensorModel
import com.example.sensor_api.domain.repositories.SensorRepository
import io.smallrye.mutiny.Uni
import javax.inject.Inject
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.WebApplicationException
import javax.ws.rs.core.Response

@Path("/guitar_sensor")
class GuitarSensorResource @Inject constructor(private val sensorRepository: SensorRepository) {
    @GET
    @Produces("application/json")
    fun getGuitarSensor(): Uni<List<SensorModel>> {
        try {
            return sensorRepository.findAllSensors()
        }
        catch(e: Exception) {
            throw WebApplicationException("Error getting guitar sensor data", e, Response.Status.INTERNAL_SERVER_ERROR)
        }
    }
}