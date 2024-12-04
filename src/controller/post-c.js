import { create } from "../user/user.js";

// File for function controling create operation on the database


export async function postEmp(req, res){
   
    try {
        res.status(200).json(await create("employee", req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to create employee object" });
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
export async function psotPt(req, res){

    try {
        res.status(200).json(await create("patient", req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "fail trying to create patient object" });
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
export async function postRel(req, res)
{
    try {
        res.status(200).json(await create("relation", req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to create employee-patient relation object" });
    }
}////////////////////////////////////////////////////////////////////////////////////////////
export async function postActivity(req, res)
{
    try {
        res.status(200).json(await create("activity", req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to create activity object" });
    }
}


