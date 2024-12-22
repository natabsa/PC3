import { update } from "../user/user.js";
import Activity from './activity.js';
import Employee from './employee.js';
import Patent from './patient.js';
import Illness from './illness.js';


// File for functions controlling update operation to the database

export async function putEmp(req, res){
   
    try
    {
        res.status(200).json(await update("employee", req.params.id, req.body));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to update employee object" });
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
export async function putPt(req, res){

    try
    {
        res.status(200).json(await update("patient", req.params.id, req.body));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to update patient object" });
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
export async function putAtv(req, res)
{
    try
    {
        res.status(200).json(await update("activity", req.params.id, req.body));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to update activity object" });
    }
}
////////////////////////////////////////////////////////////////////////////////////////////

