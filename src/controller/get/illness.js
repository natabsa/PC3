import Illness from '../../mode/illness.js';

// File for functions controlling read operation to the database

export async function getIll(req, res)
{
    try
    {
        res.status(200).json(await find(req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to read/get Illness document" });
    }
}

export default getIll;