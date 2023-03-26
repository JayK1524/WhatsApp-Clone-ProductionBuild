import express from "express";
import { addUser, getUser } from "../controllers/user.js";
import {
	newConversation,
	getConversation,
} from "../controllers/conversation.js";
import { newMessage, getMessage } from "../controllers/message.js";
import { uploadFile, getFile } from "../controllers/file.js";
import upload from "../utils/uploadFile.js";

const route = express.Router();

route.post("/addUser", addUser);
route.get("/user", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getFile);

export default route;
