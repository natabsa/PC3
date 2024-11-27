// Arquivo que contem as rotas do metodo HTTP GET

import express from "express";
import { enviarSenha, enviarPaciente, enviarAtividade, enviarFuncionario} from "../controller.js";


const getRoute=(app) => {

    // Middleware para "parsear" o body das requests
    app.use(express.json());

    // Rota para enviar a senhar caso o usuario a tenha esqucido
    app.get("/login/enviarSenha", enviarSenha);

    // Rota que enviara ao usuario a ficha de velhinho requisitada
    app.ficha("/paciente/:id", enviarPaciente);

    // Rota que enviara ao usuario a registro de uma atividade de um cuidador
    app.get("/atividade/:id", enviarAtividade);

    // Rota que enviara o registro de um cuidador
    app.get("/funcionario/:id", enviarFuncionario);

    // Rota que enviara o registo de um vinculo funcionario-cuidador
    app.get("/vinculo/:id", enviarVinculo);
};

export default getRoute; 