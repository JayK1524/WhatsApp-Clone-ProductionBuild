import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

import routes from "./routes/routes.js";

// Middlewares
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", routes);

// Serving Frontend(client)
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html")),
		function (err) {
			res.status(500).send(err);
			console.log(err);
		};
});

export default app;
