
import Illness from '../../model/illness.js';


// File for function controlling delete operations to the database

async function delIll(req, res)
{
    try
    {
        res.status(200).json(await Illness.findByIdAndDelete( req.params.id ));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to delete illness document" });
    }
}

export default delIll;