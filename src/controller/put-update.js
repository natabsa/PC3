import { update } from "../user/user.js";

// Este arquivo: varias funcoes para controlar o update de registros nas colecoes do banco de dados


export async function altFuncionario(req, res){
   
    try {
        res.status(200).json(await update("funcionario", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar consultar o registro de paciente" });
    }
}


export async function altAtividade(req, res){

    try {
        res.status(200).json(await update("atividade", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar consultar o registro de funcionario" });
    }
}


export async function altVinculo(req, res)
{
    try {
        res.status(200).json(await update("vinculo", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar consultar o registro de vinculo paciente-funcionario" });
    }
}

export async function altPaciente(req, res)
{
    try {
        res.status(200).json(await update("paciente", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar consultar o registro de vinculo paciente-funcionario" });
    }
}


export async function altObj(req, res){

    try 
    {
        res.status(200).json(await update(req.params.obj, req.params.id));
    } catch(error)
    {
        console.log(error.toString());
        res.status(500).json({ Error: `Falha ao tentar alterar registro de ${req.params.obj}` });
    }
}