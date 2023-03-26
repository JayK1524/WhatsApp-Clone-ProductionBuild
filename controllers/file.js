import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://whatsapp-clone-83cb.onrender.com";

// to getFile and read it //
let gfs;
let gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
	gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: "fs" });
	gfs = grid(conn.db, mongoose.mongo);
	gfs.collection("fs");
});

export const uploadFile = async (request, response) => {
	try {
		if (!request.file) {
			return response.status(404).json("File not found");
		}

		const fileUrl = `${url}/file/${request.file.filename}`;
		response.status(200).json(fileUrl);
	} catch (error) {
		response.status(500).json(error);
	}
};

export const getFile = async (request, response) => {
	try {
		const file = await gfs.files.findOne({ filename: request.params.filename });
		const readStream = gridfsBucket.openDownloadStream(file._id);
		readStream.pipe(response);
	} catch (error) {
		response.status(500).json({ msg: error.message });
	}
};
