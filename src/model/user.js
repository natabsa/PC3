

// Funcao que retorna o registro do documento com o id `id` que e do tipo `model`
export async function read(model, id)
{
    
}

// Fucao que cria um registro do documento com os dados `body` que sera do tipo `model`
export async function create(model, body)
{
	newDoc = new model(body);
	await newDoc.save();
    
}

// Funcao que atualiza o registro do documento com o id `id` que e do tipo dados `body`
export async function update(model, id, body)
{
    
}
// Funcao que deleta o registro do documento com o id `id` que e do tipo `model`
export async function del(model, id)
{
    
}

// Funcao que envia, por email, a senha do usuario com o id `id`
export async function enviarSenha(id)
{
    
}
