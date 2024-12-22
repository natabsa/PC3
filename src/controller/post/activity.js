import Activity from '../../model/activity.js';

// File for function controling create operation on the database

async function postActivity(req, res)
{
    try {
        res.status(200).json(await Activity.create(req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to create activity document" });
    };
};

export default postActivity;
