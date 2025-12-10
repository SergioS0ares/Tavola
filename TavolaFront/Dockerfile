# Etapa 1: Build Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
# Copia o config personalizado que criamos acima
COPY nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build /app/dist/login-page/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]