FROM openjdk:17-jdk-alpine AS builder
WORKDIR /app
COPY . .
RUN ./gradlew build

FROM openjdk:17-jdk-alpine
WORKDIR /app
EXPOSE 8080
COPY --from=builder /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]