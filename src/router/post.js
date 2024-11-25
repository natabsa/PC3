// Arquivo que contem as rotas do metodo HTTP POST

import express from "express";
import {cadPaciente, cadFuncionario, cadVinculo} from "../controller.js";


const postRoute=(app) => {

    // Middleware para "parsear" o body das requests
    app.use(express.json());
        
    // Rota para cadastrar paciente
    app.post("/cadastrar/paciente", cadPaciente);

    // Rota para cadastrar funcionario
    app.post("/cadastrar/funcionario", cadFuncionario);

    // Rota para criar vinculo funcionario-paciente
    app.post("/cadastrar/vinculo", cadVinculo);
};

export default postRoute;