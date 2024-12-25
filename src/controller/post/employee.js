import Employee from '../../model/employee.js';

// File for function controling create operation on the database

export async function postEmp(req, res){
   
    try {
        res.status(200).json(await Employee.create(req.body));
    } catch(error){
        console.error(error.toString());
        res.status(500).json({ Error: "Fail trying to create employee document"});
    };
};
