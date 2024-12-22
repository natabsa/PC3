import Illness from '../../model/illness.js';

// File for function controling create operation on the database

async function postIll(req, res)
{
    try {
        res.status(200).json(await Illness.create(req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to create activity document" });
    };
};

export default postIll;
