import { read, create, update, del, enviarSenha } from "../user/user.js";


export async function cadObj(req, res){

    try 
    {
        res.status(200).json(await create(req.params.obj, req.body));
    }
    catch(error)
    {
        console.log(error.toString());
        res.status(500).json({ Error: `Falha ao tentar criar registro de ${req.params.obj}` });
    }
}

export async function altObj(req, res){

    try 
    {
        res.status(200).json(await update(req.params.obj, req.params.id, req.body));
    }
    catch(error)
    {
        console.log(error.toString());
        res.status(500).json({ Error: `Falha ao tentar alterar registro de ${req.params.obj}` });
    }
}

export async function delObj(req, res){

    try 
    {
        res.status(200).json(await del(req.params.obj, req.params.id));
    }
    catch(error)
    {
        console.log(error.toString());
        res.status(500).json({ Error: `Falha ao tentar deletar registro de ${req.params.obj}` });
    }
}

export async function enviarObj(req, res){

    try 
    {
        res.status(200).json(await read(req.params.obj, req.params.id));
    }
    catch(error)
    {
        console.log(error.toString());
        res.status(500).json({ Error: `Falha ao tentar consultar o registro de ${req.params.obj}` });
    }
}

export async function enviarSenha(req, res)
{

    try
    {
        res.status(200).json(await enviarSenha(req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Falha ao tentar enviarsenha" })
    }
}