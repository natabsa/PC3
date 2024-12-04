import { read } from "../user/user.js";

// File for functions controlling read operation to the database

export async function getPt(req, res)
{
    try
    {
        res.status(200).json(await read("patient", req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to read/get patient object" });
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
export async function getEmp(req, res)
{
    try
    {
        res.status(200).json(await read("employee", req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to read/get employee object" });
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
export async function getAtv(req, res)
{
    try
    {
        res.status(200).json(await read("activity", req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to read/get activity object" });
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
export async function getRel(req, res)
{
    try
    {
        res.status(200).json(await read("relation", req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to read/get employee-patient relation object" });
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
export async function getPw(req, res)
{
    try
    {
        res.status(200).json(await recoverPw(req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to retrive password" });
    }
}
