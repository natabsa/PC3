import Illness from '../../mode/illness.js';

// File for functions controlling update operation to the database

async function putIll(req, res){
   
    try
    {
        res.status(200).json(await Illness.update(req.params.id, req.body));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to update Illness document" });
    }
}

export default putIll;