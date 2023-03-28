FROM openjdk:17-jdk-slim
EXPOSE 8080
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} dockerapp.jar
ENTRYPOINT ["java","-jar","dockerapp.jar"]