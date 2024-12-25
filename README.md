# Node Express Server with Mongoose

Respositório para o projeto desenvolvido na disciplina de PC3-IFB 2024/2.

Servidor de API seguindo arquitetura MVC para um sistemas de gerenciamento de clinica

## Getting Started

Para deploy,
```sh
npm run build
```
deve instalar os modulos necessários.

Uma variável de ambiente DBUSERPWD deve armazenar a string de conexão.

Servidor deve iniciar com:
```sh
npm run start
```

Estrutura:
```
.
 |-package.json
 |-package-lock.json
 |-README.md
 |-src
 | |-model
 | | |-activity.js
 | | |-employee.js
 | | |-illness.js
 | | |-patient.js
 | |-index.js
 | |-controller
 | | |-delete
 | | | |-activity.js
 | | | |-employee.js
 | | | |-illness.js
 | | | |-patient.js
 | | |-put
 | | | |-activity.js
 | | | |-employee.js
 | | | |-illness.js
 | | | |-patient.js
 | | |-get
 | | | |-activity.js
 | | | |-employee.js
 | | | |-illness.js
 | | | |-patient.js
 | | |-post
 | | | |-activity.js
 | | | |-employee.js
 | | | |-illness.js
 | | | |-patient.js
 | |-router
 | | |-router.js
 |-.gitignore
```