// File that defines HTTP ROUTES

import express from "express";
//"C.R.U.D"
import { postEmp, postPt, postRel, postAtv }    from "../controller/post-c.js";
import { getAtv, getEmp, getPt, getRel, getPw } from "../controller/get-r.js";
import { putEmp, putPt, putAtv }                from "../controller/put-u.js";
import { delEmp, delPt, delRel, delAtv }        from "../controller/delete-d.js";


const route=(app) => {

    app.use(express.json());

    // Routes for deleting a object from the database
    app.delete("/employee/:id", delEmp);
    app.delete("/patient/:id", delPt);
    app.delete("/relation/:id", delRel);
    app.delete("/activity/:id", delAtv);

    // Routes getting a record of a object from the database
    app.get("/activity/:id", getAtv);
    app.get("/employee/:id", getEmp);
    app.get("/patiente/:id", getPt);
    app.get("/relation/:id", getRel);

    // Route for recovering password
    app.get("/login/recoverPassword/:id", getPw);

    // Routes for posting a new object to the database
    app.post("/post/patient", postPt);
    app.post("/post/employee", postEmp);
    app.post("/post/relation", postRel);
    app.post("/create/activity", postAtv);

    // Routes for "updating" a object in the database
    app.put("/patient/:id", putPt);
    app.put("/employee/:id", putEmp);
    app.put("/activity/:id", putAtv);

    /*
    app.get("/banco/func", getFuncDB);
    app.get("/banco/adm", getAdminDB);
    */
};

export default route;