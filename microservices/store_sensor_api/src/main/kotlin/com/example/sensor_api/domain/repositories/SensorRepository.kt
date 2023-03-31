package com.example.sensor_api.domain.repositories
import com.example.sensor_api.domain.models.SensorModel
import io.quarkus.mongodb.panache.reactive.ReactivePanacheMongoRepository
import io.smallrye.mutiny.Uni
import org.bson.types.ObjectId
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class SensorRepository : ReactivePanacheMongoRepository<SensorModel> {
    fun findAllSensors(): Uni<List<SensorModel>> {
        return listAll()
    }

    fun findSensorById(id: ObjectId): Uni<SensorModel> {
        return findById(id)
    }

    fun deleteSensorById(id: ObjectId) {
        deleteById(id)
            .subscribe()
    }
}