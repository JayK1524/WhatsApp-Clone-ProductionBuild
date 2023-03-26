import React, { useEffect } from "react";
import { EmojiEmotions, AttachFile, Mic } from "@mui/icons-material";
import { Box, styled, InputBase } from "@mui/material";
import { uploadFile } from "../../../service/api";

const Component = styled(Box)`
	height: 70px;
	background: #ededed;
	width: 100%;
	padding: 0 15px;
	display: flex;
	align-items: center;
	& > * {
		margin: 5px;
		color: #919191;
	}
`;

const Message = styled(Box)`
	border-radius: 18px;
	background-color: #ffffff;
	width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
	width: 100%;
	height: 20px;
	padding: 20px;
	padding-left: 25px;
	font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
	transform: rotate(35deg);
`;

const Footer = ({ sendText, value, setValue, file, setFile, setImage }) => {
	useEffect(() => {
		const getImage = async () => {
			if (file) {
				const data = new FormData();
				data.append("name", file.name);
				data.append("file", file);

				let response = await uploadFile(data);
				setImage(response.data);
			}
		};
		getImage();
	}, [file, setImage]);

	const onFileChange = (e) => {
		setValue(e.target.files[0].name);
		setFile(e.target.files[0]);
	};

	return (
		<Component>
			<EmojiEmotions />
			<label htmlFor="fileInput">
				<ClipIcon style={{ cursor: "pointer" }} />
			</label>
			<input
				type="file"
				id="fileInput"
				style={{ display: "none" }}
				onChange={(e) => onFileChange(e)}
			/>
			<Message>
				<InputField
					placeholder="Type a message"
					onChange={(e) => setValue(e.target.value)}
					onKeyPress={(e) => sendText(e)}
					value={value}
				/>
			</Message>
			<Mic />
		</Component>
	);
};

export default Footer;
