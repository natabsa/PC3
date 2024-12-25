import Patient from '../../model/patient.js';

// File for functions controlling read operation to the database

export async function getPt(req, res)
{
    try
    {
        res.status(200).json(await Patient.findById(req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to read/get patient document" });
    }
};