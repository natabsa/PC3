import express from 'express';
import mongoose from 'mongoose';

try
{
	await mongoose.connect(process.env.DBUSERPWD);
} catch(error)
{
	console.log(error.toString());
}

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send("Node Express Server with Mongoose");
});

const port = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});