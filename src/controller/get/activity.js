import Activity from '../../mode/activity.js';

// File for functions controlling read operation to the database

export async function getAtv(req, res)
{
    try
    {
        res.status(200).json(await read(req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to read/get activity document" });
    }
}

export default getAtv;