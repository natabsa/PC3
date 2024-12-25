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
README.md
package-lock.json
package.json
src/controller/delete/activity.js
src/controller/delete/employee.js
src/controller/delete/illness.js
src/controller/delete/patient.js
src/controller/get/activity.js
src/controller/get/employee.js
src/controller/get/illness.js
src/controller/get/patient.js
src/controller/post/activity.js
src/controller/post/employee.js
src/controller/post/illness.js
src/controller/post/patient.js
src/controller/put/activity.js
src/controller/put/employee.js
src/controller/put/illness.js
src/controller/put/patient.js
src/index.js
src/model/activity.js
src/model/employee.js
src/model/illness.js
src/model/patient.js
src/router/router.js
```
