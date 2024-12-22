import Employee from '../../mode/employee.js';

// File for functions controlling update operation to the database

async function putEmp(req, res){
   
    try
    {
        res.status(200).json(await update("employee", req.params.id, req.body));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to update employee document" });
    }
}

export default putEmp;