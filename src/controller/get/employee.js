import Employee from '../../mode/employee.js';

// File for functions controlling read operation to the database

async function getEmp(req, res)
{
    try
    {
        res.status(200).json(await Employee.findById(req.params.id));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail on trying to read/get employee document" });
    }
}

export default getEmp;