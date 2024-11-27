import { read } from "../user/user.js";

// Este srquivo: varias funcoes para controlar a leitura de registros nas colecoes do banco de dados
// "get senha" ainda no mapeada aqui


export async function enviarPaciente(req, res){
   
    try {
        res.status(200).json(await read("paciente", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar consultar o registro de paciente" });
    }
}


export async function enviarFuncionario(req, res){

    try {
        res.status(200).json(await read("funcionario", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar consultar o registro de funcionario" });
    }
}


export async function enviarAtividade(req, res)
{
    try {
        res.status(200).json(await read("vinculo", req.params.id));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar consultar o registro de vinculo paciente-funcionario" });
    }
}