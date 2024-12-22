import Activity from '../../model/activity.js';

// File for functions controlling update operation to the database

async function putAtv(req, res)
{
    try
    {
        res.status(200).json(await Activity.update(req.params.id, req.body));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to update activity document" });
    }
}

export default putAtv;
