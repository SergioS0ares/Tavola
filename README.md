# Projeto Tavola

Sistema completo de gerenciamento de cardápios, dividido entre frontend em **Angular 19** e backend em **Spring Boot (Java 21)**.

---

## 📋 Sumário

1. [Introdução](#Introdução)
2. [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)

   * [Frontend](#frontend)
   * [Backend](#backend)
3. [Instalação e Execução](#Instalação-e-Execução)

   * [Frontend](#frontend-1)
   * [Backend](#backend-1)
4. [Scripts (Frontend)](#scripts-frontend)
5. [Endpoints Principais (Backend)](#endpoints-principais-backend)
6. [Estrutura de Pastas](#estrutura-de-pastas)
7. [Licença](#licenca)

---

## Introdução

O **Projeto Tavola** oferece uma solução full‑stack para gerenciar cardápios de restaurantes. O frontend responsivo em Angular fornece uma interface moderna, enquanto o backend em Spring Boot expõe APIs REST seguras, com autenticação JWT e persistência em PostgreSQL.

## Tecnologias e Ferramentas

### Frontend

* **Angular 19**
* **TypeScript 5.5**
* **SCSS**
* **RxJS**
* **Angular Material** & **CDK**
* **ng-zorro-antd**
* **ngx-mask**
* **ngx-toastr** & **SweetAlert2**
* **Jasmine + Karma**

### Backend

* **Java 21**
* **Spring Boot 3.3.8**
* **Spring Security (JWT)**
* **Spring Data JPA**
* **PostgreSQL** (driver JDBC)
* **JJWT (io.jsonwebtoken 0.11.5)**
* **springdoc-openapi** (Swagger UI)
* **Maven Wrapper**

## Instalação e Execução

### Frontend

1. Clone este repositório e entre na pasta do frontend:

   ```bash
   git clone <url-do-repo>
   cd tavola-frontend
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```
3. Rode em modo de desenvolvimento:

   ```bash
   npm start      # ou ng serve
   ```
4. Acesse a aplicação em `http://localhost:4200/`.

### Backend

1. Entre na pasta do backend:

   ```bash
   cd TavolaApp
   ```
2. Inicie via Maven Wrapper:

   ```bash
   ./mvnw spring-boot:run
   ```
3. A API ficará disponível em `http://localhost:8080/`.

## Scripts (Frontend)

```bash
npm start      # ng serve em dev
npm run build  # build de produção em dist/login-page
npm run watch  # build contínuo
npm test       # testes unitários
```

## Endpoints Principais (Backend)

* `POST /auth/login` — login, retorna accessToken e define refreshToken em cookie
* `POST /auth/register` — registro de usuário
* `POST /auth/refresh` — renova accessToken usando cookie
* `POST /auth/uploads` — sobe uma imagen de um usuário para o repositório do servidor
* `POST /auth/cardapios/save` — cadastra novo cardápio
* `GET /auth/mesas` — exibe todas os espaços de mesas salvos no banco de dados
* `GET /auth/restaurantes` — exibe todos os restaurantes cadastrados

## Estrutura de Pastas

```
/            # raiz do projeto
├── tavola-frontend/   # código Angular
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── tsconfig*.json
├── TavolaApp/         # código Spring Boot
│   ├── src/
│   ├── pom.xml
│   └── mvnw*          # Maven Wrapper
└── nginx.conf         # configuração de produção
```

## Licença

Distribuído sob a licença **MIT**.
