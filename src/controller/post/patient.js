import Patient from "../../model/patient.js";

export async function postPt(req, res)
{
    try {
        res.status(200).json(await Patient.create(req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "fail trying to create patient document" });
    }
};
