import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
import app from "./app.js";

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", false);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
	})
	.then(() => console.log("DB connection successful!"));

import { Server } from "socket.io";

const io = new Server(`ws://whatsapp-clone-83cb.onrender.com`, {
	cors: {
		origin: "https://whatsapp-clone-83cb.onrender.com",
	},
});

let users = [];

const addUser = (userData, socketId) => {
	!users.some((user) => user.sub === userData.sub) &&
		users.push({ ...userData, socketId });
};

const getUser = (userId) => {
	return users.find((user) => user.sub === userId);
};

io.on("connection", (socket) => {
	console.log("user connected");

	//connect
	socket.on("addUser", (userData) => {
		addUser(userData, socket.id);
		io.emit("getUsers", users);
	});

	//send message
	socket.on("sendMessage", (data) => {
		let user = getUser(data.receiverId);
		io.to(user && user.socketId).emit("getMessage", data);
	});
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
