// Arquivo que contem as rotas do metodo HTTP DELETE


import express from "express";
import { delPaciente, delFuncionario, delVinculo } from "../controller.js";


const deleteRoute=(app) => {

    // Middleware para "parsear" o body das requests
    app.use(express.json());
    
    // Rota para deletar cadastro de paciente
    app.delete("/deletar/paciente", delPaciente);

    // Rota para deletar cadastro de funcionario
    app.delete("/deletar/funcionario", delFuncionario);

    // Rota para deletar vinculo funcionario-paciente
    app.delete("/deletar/vinculo", delVinculo);
};

export default deleteRoute;