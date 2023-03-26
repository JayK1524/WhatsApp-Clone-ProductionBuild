import React from "react";
import { Box, styled, Typography, Divider } from "@mui/material";
import { emptyChatImage } from "../../../data/data";

const Component = styled(Box)`
	background: #f8f9fa;
	padding: 30px 0;
	text-align: center;
	height: 100vh;
`;
const Container = styled(Box)`
	padding: 0 200px;
`;
const Image = styled("img")({
	marginTop: 100,
	width: 400,
});
const Title = styled(Typography)`
	font-size: 32px;
	font-family: inherit;
	font-weight: 300;
	color: #41525d;
	margin-top: 25px 0 15px 0;
`;
const Subtitle = styled(Typography)`
	font-size: 14px;
	color: #667781;
	font-weight: 400;
	font-family: inherit;
`;

const DividerLine = styled(Divider)`
	margin: 40px 0;
	opacity: 0.4;
`;

const EmptyChat = () => {
	return (
		<Component>
			<Container>
				<Image src={emptyChatImage} alt="emptyChatImage" />
				<Title>WhatsApp Web</Title>
				<Subtitle>
					Now send and receive messages without keeping your phone online.
				</Subtitle>
				<Subtitle>
					Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
				</Subtitle>
				<DividerLine />
			</Container>
		</Component>
	);
};

export default EmptyChat;
