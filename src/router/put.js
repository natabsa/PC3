// Arquivo que contem as rotas do metodo HTTP PUT


import express from "express";
import { altPaciente, altFuncionario, altAtividade, altObj } from "../controller.js";


const putRoute=(app) => {

    // Middleware para "parsear" o body das requests
    app.use(express.json());
    
    // Rota para alterar cadastro de velhinho
    app.put("/paciente/:id", altPaciente);

    // Rota para alterar cadastro de cuidador e admin
    app.put("/funcionario/:id", altFuncionario);

    // Rota para alterar registro de atividade
    app.put("/funcionario/:id", altAtividade);

    // Rota para alterar cadastro de Objeto generico
    app.put("/:obj/:id", altObj);
};

export default putRoute;