import Patient from '../../model/patient.js';


// File for function controlling delete operations to the database

async function delPt(req, res)
{
    try {
        res.status(200).json(await Patient.findByIdAndDelete( req.params.id ));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to delete patient document" });
    }
}

export default delPt;