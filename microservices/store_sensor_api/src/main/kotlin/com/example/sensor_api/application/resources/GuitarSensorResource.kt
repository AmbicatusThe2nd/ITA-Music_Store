package com.example.sensor_api.application.resources

import com.example.sensor_api.domain.models.SensorModel
import com.example.sensor_api.domain.repositories.SensorRepository
import io.smallrye.mutiny.Uni
import org.bson.types.ObjectId
import java.lang.IllegalArgumentException
import javax.inject.Inject
import javax.ws.rs.DELETE
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.PathParam
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

    @GET
    @Path("/{id}")
    @Produces("application/json")
    fun getSensorDataById(@PathParam("id") id: String): Uni<SensorModel> {
        try {
            val objectId = ObjectId(id)
            return sensorRepository.findSensorById(objectId)
        }
        catch (e: IllegalArgumentException) {
            throw WebApplicationException("Invalid id", e, Response.Status.BAD_REQUEST)
        }
        catch(e: Exception) {
            throw WebApplicationException("Error getting guitar sensor data", e, Response.Status.INTERNAL_SERVER_ERROR)
        }
    }

    @DELETE
    @Path("/{id}")
    @Produces("application/json")
    fun deleteSensorDataById(@PathParam("id") id: String) {
        try {
            val objectId = ObjectId(id)
            sensorRepository.deleteSensorById(objectId)
        }
        catch (e: IllegalArgumentException) {
            throw WebApplicationException("Invalid id", e, Response.Status.BAD_REQUEST)
        }
        catch(e: Exception) {
            throw WebApplicationException("Error getting guitar sensor data", e, Response.Status.INTERNAL_SERVER_ERROR)
        }
    }
}