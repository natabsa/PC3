import { del } from "../model/model.js";


// Este srquivo: varias funcoes para controlar a delecao de registros nas diversas colecoes do banco de dados

export async function delPaciente(req, res){
   
    try {
        res.status(200).json(await del("paciente", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar deletar registro de paciente" });
    }
}


export async function delFuncionario(req, res){

    try {
        res.status(200).json(await del("funcionario", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar deletar registro de funcionario" });
    }
}


export async function delVinculo(req, res){
    
    try {
        res.status(200).json(await del("vinculo", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar deletar registro de vinculo paciente-funcionario" });
    }
}

export async function delObj(req, res){

    try 
    {
        res.status(200).json(await del(req.params.obj, req.params.id));
    } catch(error)
    {
        console.log(error.toString());
        res.status(500).json({ Error: `Falha ao tentar deletar registro de ${req.params.obj}` });
    }
}
