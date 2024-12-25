import Activity from '../../model/activity.js';

// File for functions controlling read operation to the database

async function getAtv(req, res)
{
    try
    {
        res.status(200).json(await Activity.findById(req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to read/get activity document" });
    }
}

export default getAtv;