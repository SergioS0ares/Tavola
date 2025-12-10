# Etapa 1: Build da aplicação (Maven)
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Executa o build pulando os testes para ser mais rápido no deploy
RUN mvn clean package -DskipTests

# Etapa 2: Imagem final leve (JDK 21)
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Cria a pasta de uploads dentro do container
RUN mkdir -p /app/uploads

# Copia o .jar gerado na etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta
EXPOSE 8080

# Comando de inicialização
ENTRYPOINT ["java", "-jar", "app.jar"]