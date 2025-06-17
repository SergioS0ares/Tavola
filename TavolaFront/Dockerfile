# ---- Estágio 1: Build ----
# Perfeito, sem alterações.
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# ---- Estágio 2: Serve ----
FROM nginx:stable-alpine

# Limpa a pasta padrão
RUN rm -rf /usr/share/nginx/html/*

# >>> A CORREÇÃO FINAL: Apontamos para a subpasta 'browser' <<<
COPY --from=build /app/dist/login-page/browser/ /usr/share/nginx/html

# Ajusta as permissões (vamos manter por segurança)
RUN chown -R nginx:nginx /usr/share/nginx/html

# Copia a configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80