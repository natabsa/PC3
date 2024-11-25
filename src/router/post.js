// Arquivo que contem as rotas do metodo HTTP POST

import express from "express";
import {cadPaciente, cadFuncionario, cadVinculo, cadAtividade} from "../controller.js";


const postRoute=(app) => {

    // Middleware para "parsear" o body das requests
    app.use(express.json());
        
    // Rota para cadastrar velhinho
    app.post("/cadastrar/paciente", cadPaciente);

    // Rota para cadastrar cuidador
    app.post("/cadastrar/funcionario", cadFuncionario);

    // Rota para criar vinculo cuidador-velhinho (cuidar velhinho)
    app.post("/cadastrar/vinculo", cadVinculo);

    // Rota para marcar uma atividade a um cuidador
    app.post("/cadastrar/atividade", cadAtividade);
};

export default postRoute;