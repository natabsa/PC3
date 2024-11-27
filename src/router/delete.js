// Arquivo que contem as rotas do metodo HTTP DELETE


import express from "express";
import { delPaciente, delFuncionario, delVinculo } from "../controller.js";


const deleteRoute=(app) => {

    // Middleware para "parsear" o body das requests
    app.use(express.json());
    
    // Rota para deletar cadastro de velhinho
    app.delete("/paciente/:id", delPaciente);

    // Rota para deletar cadastro de cuidador
    app.delete("/funcionario/:id", delFuncionario);

    // Rota para deletar vinculo cuidador-velhinho
    app.delete("/vinculo/:id", delVinculo);

    // Rota para deletar cadastro de velhinho
    app.delete("/:obj/:id", delObj);
};

export default deleteRoute;