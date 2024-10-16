FROM ubuntu:latest
LABEL authors="Germán"

# Usar una imagen de base que ya contiene Java (por ejemplo, OpenJDK 17)
FROM eclipse-temurin:17-jdk-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo JAR generado por tu aplicación Spring Boot
COPY target/fifafriends-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto en el que corre tu aplicación (el puerto predeterminado de Spring Boot es 8080)
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]