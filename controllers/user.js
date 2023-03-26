import User from "../model/User.js";

export const addUser = async (request, response) => {
	try {
		let userExist = await User.findOne({ sub: request.body.sub });
		if (userExist) {
			response.status(200).json("user already exists");
			return;
		}

		const newUser = await User(request.body);
		await newUser.save();
		return response.status(200).json(newUser);
	} catch (error) {
		return response.status(500).json(error);
	}
};

export const getUser = async (request, response) => {
	try {
		const user = await User.find({});
		response.status(200).json(user);
	} catch (error) {
		response.status(500).json(error, "Error");
	}
};
