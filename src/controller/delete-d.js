import { del } from "../model/model.js";

// File for function controlling delete operations to the database

export async function delPt(req, res)
{
    try {
        res.status(200).json(await del("patient", req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to delete patient object" });
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function delEmp(req, res)
{
    try {
        res.status(200).json(await del("employee", req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to delete employee object" });
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function delRel(req, res)
{
    try
    {
        res.status(200).json(await del("relation", req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to delete employee-patient realtion object" });
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function delAtv(req, res)
{
    try
    {
       res.status(200).json(await del("activity", req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to delete activity object"});
    }
}
