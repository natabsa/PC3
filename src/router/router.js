// File that defines HTTP ROUTES

import express from "express";
//"C.R.U.D"
import postEmp from "../controller/post/employee.js";
import postPt from "../controller/post/patient.js";
import postIll from "../controller/post/illness.js";
import postAtv from "../controller/post/activity.js";

import getAtv from "../controller/get/activity.js";
import getEmp from "../controller/get/employee.js";
import getPt from "../controller/get/patient.js";
import getIll from "../controller/get/illness.js";
//import getPw from "../controller/get/r.js";

import putEmp from "../controller/put/employee.js";
import putPt from "../controller/put/patient.js";
import putAtv from "../controller/put/activity.js";
import putIll from "../controller/put/illness.js";

import delEmp from "../controller/delete/employee.js";
import delPt from "../controller/delete/patient.js";
import delIll from "../controller/delete/illness.js";
import delAtv from "../controller/delete/activity.js";

const route = (app) => {
    app.use(express.json());

    // Routes for deleting a object from the database
    app.delete("/api/employee/:id", delEmp);
    app.delete("/api/patient/:id", delPt);
    app.delete("/api/illness/:id", delIll);
    app.delete("/api/activity/:id", delAtv);

    // Routes getting a record of a object from the database
    app.get("/api/activity/:id", getAtv);
    app.get("/api/employee/:id", getEmp);
    app.get("/api/patiente/:id", getPt);
    app.get("/api/illness/:id", getIll);

    // Route for recovering password
    //app.get("/api/login/recoverPassword/:id", getPw);

    // Routes for posting a new object to the database
    app.post("/api/patient", postPt);
    app.post("/api/employee", postEmp);
    app.post("/api/illness", postIll);
    app.post("/api/activity", postAtv);

    // Routes for "updating" a object in the database
    app.put("/api/patient/:id", putPt);
    app.put("/api/employee/:id", putEmp);
    app.put("/api/activity/:id", putAtv);
    app.put("/api/illness/:id", putIll);

    /*
    app.get("/api/banco/func", getFuncDB);
    app.get("/api/banco/adm", getAdminDB);
    */
};

export default route;
