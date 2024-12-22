# Node + Express Server

Respositório para o projeto desenvolvido na disciplina de PC3-IFB 2024/2.

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
├── node_modules
│   └──...
├── package.json
├── package-lock.json
├── README.md
├── src (codigo fonte)
│   ├── config (configuracoes necessarias)
│   │   └── dbConfig.js
│   ├── controller (controle e logica da aplicacao)
│   │   ├── delete-d.js
│   │   ├── get-r.js
│   │   ├── post-c.js
│   │   └── put-u.js
│   ├── index.js
│   ├── model (modelo de dados e acesso aos mesmos)
│   │   └── model.js
│   └── router (rotas/view)
│       ├── delete.js
│       ├── get.js
│       ├── post.js
│       └── put.js
└── uploads
│   └──...
```
