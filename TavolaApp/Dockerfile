# Dockerfile Otimizado para o Backend (sem build interno)

# Usamos apenas a imagem leve do Java 21, já que não vamos compilar nada.
FROM openjdk:21-jdk-slim

# Define o diretório de trabalho dentro do container.
WORKDIR /app

# Copia o arquivo .jar que foi gerado LOCALMENTE na pasta 'target'
# para dentro do container, renomeando para 'app.jar'.
COPY target/*.jar app.jar

# Expõe a porta que a API usa.
EXPOSE 8080

# Comando para iniciar a API quando o container ligar.
ENTRYPOINT ["java", "-jar", "app.jar"]