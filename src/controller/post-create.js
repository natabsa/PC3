import { create } from "../user/user.js";

// Este srquivo: varias funcoes para controlar a criacao de registros nas colecoes do banco de dados


export async function cadFuncionario(req, res){
   
    try {
        res.status(200).json(await create("funcionario", req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar criar o registro de paciente" });
    }
}


export async function cadAtividade(req, res){

    try {
        res.status(200).json(await create("atividade", req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar criar o registro de funcionario" });
    }
}


export async function cadVinculo(req, res)
{
    try {
        res.status(200).json(await create("vinculo", req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar criar o registro de vinculo paciente-funcionario" });
    }
}

export async function cadPaciente(req, res)
{
    try {
        res.status(200).json(await create("paciente", req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar criar o registro de vinculo paciente-funcionario" });
    }
}


export async function cadObj(req, res){

    try 
    {
        res.status(200).json(await create(req.params.obj, req.body));
    } catch(error)
    {
        console.log(error.toString());
        res.status(500).json({ Error: `Falha ao tentar criar registro de ${req.params.obj}` });
    }
}