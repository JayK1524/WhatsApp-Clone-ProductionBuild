import dotenv from "dotenv";
import mongoose from "mongoose";
import { Server } from "socket.io";

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

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});

const io = new Server(server, {
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
