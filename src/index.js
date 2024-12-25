import express from "express";
import mongoose from "mongoose";
import route from "./router/router.js";

try {
	await mongoose.connect(process.env.DBCONNCTSTR);
} catch (error) {
	console.log(error.toString());
}

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Node Express Server with Mongoose");
});

route(app);

const port = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
