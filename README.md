# Projeto Tavola (Frontend Angular)

Este repositório contém a aplicação **Tavola** desenvolvida com **Angular 19**, responsável pela interface web de gerenciamento de cardápios e autenticação.

---

## 📋 Sumário

1. [Introdução](#introducao)
2. [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)
3. [Bibliotecas Principais](#bibliotecas-principais)
4. [Scripts NPM](#scripts-npm)
5. [Configuração do Projeto](#configuracao-do-projeto)
6. [Executando Localmente](#executando-localmente)
7. [Build de Produção](#build-de-producao)
8. [Servindo com Nginx](#servindo-com-nginx)
9. [Estrutura de Pastas](#estrutura-de-pastas)
10. [Contribuições](#contribuicoes)
11. [Licença](#licenca)

---

## Introdução

Este README descreve as principais informações para instalação, configuração e deploy do frontend da aplicação Tavola, construído em Angular 19.

## Tecnologias e Ferramentas

* **Angular 19** (CLI, Core, Common, Forms, Router)
* **TypeScript 5.5**
* **SCSS** para estilo de componentes
* **RxJS** para programação reativa
* **Angular Material** & **CDK** para componentes e layout
* **Ng Zorro Antd** (componentes Ant Design)
* **ngx-mask** para máscaras de entrada
* **ngx-toastr** e **SweetAlert2** para notificações e alertas
* **Zone.js** (change detection)
* **Jasmine + Karma** para testes unitários
* **Nginx** para servir build de produção

## Bibliotecas Principais

| Pacote                               | Utilidade                                  |
| ------------------------------------ | ------------------------------------------ |
| `@angular/material` & `@angular/cdk` | Componentes UI (botões, diálogos, tabelas) |
| `ng-zorro-antd`                      | Componentes avançados (grid, formulário)   |
| `@sweetalert2/ngx-sweetalert2`       | Alertas bonitos e modais                   |
| `ngx-mask`                           | Máscaras (telefone, CEP, datas)            |
| `ngx-toastr`                         | Toasts de notificação                      |
| `rxjs`                               | Operadores reativos                        |
| `zone.js`                            | Angular change-detection                   |
| `typescript`                         | Tipagem estática                           |
| `jasmine`, `karma`                   | Testes unitários                           |

## Scripts NPM

No `package.json` estão definidos os seguintes comandos:

```bash
# inicia servidor de desenvolvimento (via npm start)
npm start      # -> ng serve

# ou diretamente com Angular CLI:
ng serve       # roda a aplicação em dev

# compila para produção em dist/login-page
npm run build  

# compila em modo watch (rebuild automático)
npm run watch  

# executa testes unitários
npm test       
```

## Configuração do Projeto

* **Entry point**: `src/main.ts`
* **Arquivo de configuração**: `angular.json` (build, serve, test)
* **TypeScript**:

  * `tsconfig.json` define target ES2022, strict mode e libs (`dom`, `ES2022`)
  * `tsconfig.app.json` para build de aplicação
  * `tsconfig.spec.json` para testes

## Executando Localmente

Clone este repositório e acesse a pasta do frontend:

```bash
git clone <url-do-repo>
cd tavola-frontend
```

Instale dependências:

```bash
npm install
```

Inicie em modo dev:

```bash
npm start
```

Acesse `http://localhost:4200/`.

## Build de Produção

Para gerar a versão otimizada:

```bash
npm run build
```

Os arquivos finais serão gerados em `dist/login-page/`.

## Servindo com Nginx

Use a configuração abaixo (arquivo `nginx.conf`) para servir o build estático:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Basta copiar todo o conteúdo de `dist/login-page/` para `/usr/share/nginx/html/` no container ou servidor e reiniciar o Nginx.

## Estrutura de Pastas

```bash
/
├── src/
│   ├── app/            # Módulos, componentes, serviços, guards e interceptors
│   ├── assets/         # Imagens, fontes e ícones
│   ├── environments/   # Configurações de dev e prod
│   ├── styles.scss     # Estilos globais
│   └── main.ts         # Bootstrap da aplicação
├── angular.json        # Config CLI e build
├── package.json        # Dependências e scripts
├── tsconfig*.json      # Configurações TS
└── nginx.conf          # Exemplo de servidor de produção
```

git checkout -b feature/nome-da-feature

```
3. Implemente e teste localmente.
4. Abra um pull request descrevendo sua mudança.

## Licença

Este projeto está sob a licença MIT.

```
