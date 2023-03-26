import axios from "axios";

const url = "https://whatsapp-clone-83cb.onrender.com";

export const addUser = async (data) => {
	try {
		let response = await axios.post(`${url}/addUser`, data);
		return response.data;
	} catch (error) {
		console.log("Error while calling addUser API ", error);
	}
};

export const getUser = async () => {
	try {
		let response = await axios.get(`${url}/user`);
		return response.data;
	} catch (error) {
		console.log("Error while calling getUser API ", error);
	}
};

export const setConversation = async (data) => {
	try {
		await axios.post(`${url}/conversation/add`, data);
	} catch (error) {
		console.log("Error while calling setConversation API ", error);
	}
};

export const getConversation = async (users) => {
	try {
		let response = await axios.post(`${url}/conversation/get`, users);
		return response.data;
	} catch (error) {
		console.log("Error while calling getConversation API ", error);
	}
};

export const getMessage = async (id) => {
	try {
		let response = await axios.get(`${url}/message/get/${id}`);
		return response.data;
	} catch (error) {
		console.log("Error while calling getMessages API ", error);
	}
};

export const newMessage = async (data) => {
	try {
		return await axios.post(`${url}/message/add`, data);
	} catch (error) {
		console.log("Error while calling newConversations API ", error);
	}
};

export const uploadFile = async (data) => {
	try {
		return await axios.post(`${url}/file/upload`, data);
	} catch (error) {
		console.log("Error while calling uploadFile API ", error);
	}
};
