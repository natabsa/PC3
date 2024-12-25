import Illness from '../../model/illness.js';

// File for functions controlling update operation to the database

async function putIll(req, res){
   
    try
    {
		res.status(200).json(await Illness.findByIdAndUpdate( req.params.id, req.body, {new: true} ));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to update Illness document" });
    }
}

export default putIll;