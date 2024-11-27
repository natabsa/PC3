// Arquivo que contem as rotas do metodo HTTP PUT


import express from "express";
import { delObj, enviarObj, cadObj, altObj, enviarSenha} from "../controller.js";


const route=(app) => {

    app.use(express.json());

    // Rota para deletar cadastro "objeto genereico"
    app.delete("/:obj/:id", delObj);

    // Rota que enviara o registo de um "objeto genereico"
    app.get("/:obj/:id", enviarObj);

    // Rota para recuperar senha
    app.get("/login/esqueciSenha/:id", enviarSenha);

    // Rota para cadastrar "objeto genereico"
    app.post("/cadastrar/:obj", cadObj);

    // Rota para alterar cadastro de "objeto genereico"
    app.put("/:obj/:id", altObj);
};

export default route;