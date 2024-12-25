import Patient from '../../model/patient.js';

// File for functions controlling update operation to the database

async function putEmp(req, res){
   
    try
    {
		res.status(200).json(await Patient.findByIdAndUpdate( req.params.id, req.body, {new: true} ));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to update patient document" });
    }
};
export default putEmp;