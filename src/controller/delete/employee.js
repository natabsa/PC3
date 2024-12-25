
import Employee from '../../model/employee.js';

// File for function controlling delete operations to the database

export async function delEmp(req, res)
{
    try {
        res.status(200).json(await Employee.findByIdAndDelete( req.params.id ));
    }
    catch(error)
    {
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to delete employee document" });
    }
};
