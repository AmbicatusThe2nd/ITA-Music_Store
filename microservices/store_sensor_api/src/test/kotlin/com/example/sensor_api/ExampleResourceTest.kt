package com.example.sensor_api

import io.quarkus.test.junit.QuarkusTest
import io.restassured.RestAssured.given
import org.hamcrest.CoreMatchers.`is`
import org.junit.jupiter.api.Test

@QuarkusTest
class ExampleResourceTest {

    /*
    @Test
    fun testGetAllEndpoint() {
        given()
          .`when`().get("/guitar_sensor")
          .then()
             .statusCode(200)
    }

    @Test
    fun testGetSpecificEndpoint() {
        given()
          .`when`().get("/guitar_sensor/6426ad5055cf3a669f286d3b")
          .then()
             .statusCode(200)
    }

     */

    @Test
    fun testGetSpecificEndpointWithInvalidId() {
        given()
          .`when`().get("/guitar_sensor/6426ad5055cf3a669f286d3")
          .then()
             .statusCode(400)
    }

    /*

    @Test
    fun testDeleteSpecificEndpoint() {
        given()
          .`when`().delete("/guitar_sensor/6426ad5055cf3a669f286d3b")
          .then()
             .statusCode(204)
    }

     */

    @Test
    fun testDeleteSpecificEndpointWithInvalidId() {
        given()
          .`when`().delete("/guitar_sensor/6426ad5055cf3a669f286d3")
          .then()
             .statusCode(400)
    }

}