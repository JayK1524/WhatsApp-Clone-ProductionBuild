import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const mongoURI = process.env.URL;
const promise = mongoose.connect(mongoURI, { useNewUrlParser: true });

const storage = new GridFsStorage({
	db: promise,
	file: (request, file) => {
		const match = ["image/jpg", "image/jpeg", "image/png"];

		if (match.indexOf(file.mimeType) === -1) {
			return `${Date.now()}-file-${file.originalname}`;
		}

		return {
			bucketName: "files/photos",
			filename: `${Date.now()}-file-${file.originalname}`,
		};
	},
});

export default multer({ storage });
