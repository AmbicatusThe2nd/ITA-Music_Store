# ITA-Music_Store
This is a School project for the subject "IT Architectures". The projects is based on the microservice architecture. It has 3-4 microservices and a frontend. The project simulates an online music store.


There are planned 3 Microservices and in this project. Each of the following service descriptions have a detailed diagram that represents Domain Driven Architecture.

**1. Item_API**

Item_API will offer the functionality of ensuring all data flow of the items that are for sale. In our case musical instruments. It will also have simple CRUD elements for adding, updating, and deleting items from the Database. The DDD architecture is planned as follows:

![item_service_diagram](https://user-images.githubusercontent.com/58732957/222520889-53b661f9-1e41-4bad-b032-c649e9251a73.jpg)

**Functional and non-functional requirements**

Functional | Sends all items for sale to frontend | Search function for certain items | System middleware logs every call with a timestamp 
--- | --- | --- | --- 
Non-Functional | Every request has to be processed in less than 15 seconds | If an item order is missing it won't show on frontend | System regulates the number of items returned


**2. Order_API**

Order_API will offer the functionality of saving orders of certain items that we're bought from a user in the Database. It will also have simple CRUD elements for adding, updating, and deleting items from the Database. The DDD architecture is planned as follows:

![item_service_diagram](https://user-images.githubusercontent.com/58732957/222521347-ac47594e-33d0-4c82-adae-1b69994914e8.jpg)

**Functional and non-functional requirements**

Functional | Providing order functionality | User can request their orders | User recieves an email for every purchase made 
--- | --- | --- | --- 
Non-Functional | Every request has to be processed in less than 15 seconds | Email has to be delivered in maximum of 30 minutes | Fast ordering


**3. Statistic_API**

Statistic_API will ensure the data flow gained from the planned RabbitMQ. The message broker will send data from a sensor which will tell us how many people have physically visited the store in a day. The DDD architecture is planned as follows:

![statistics_service_diagram](https://user-images.githubusercontent.com/58732957/222522582-9d17b515-8890-4b87-b5d4-d1de474b5b6f.jpg)


**Functional and non-functional requirements**

Functional | Providing sensor data | System middleware logs every call with a timestamp | System sends a message if the sensor is offline
--- | --- | --- | --- 
Non-Functional | Every request has to be processed in less than 15 seconds | Sensor data has to be delivered in less than 10 seconds | Sensor data is delivered in real-time
