import Activity from '../../model/activity.js';

// File for functions controlling update operation to the database

async function putAtv(req, res)
{
    try
    {
		res.status(200).json(await Activity.findByIdAndUpdate( req.params.id, req.body, {new: true} ));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to update activity document" });
    }
}

export default putAtv;
