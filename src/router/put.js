// Arquivo que contem as rotas do metodo HTTP PUT


import express from "express";
import { altPaciente, altFuncionario} from "../controller.js";


const putRoute=(app) => {

    // Middleware para "parsear" o body das requests
    app.use(express.json());
    
    // Rota para alterar cadastro de paciente
    app.put("/alterar/paciente", altPaciente);

    // Rota para alterar cadastro de funcionario
    app.put("/alterar/funcionario", altFuncionario);
};

export default putRoute;