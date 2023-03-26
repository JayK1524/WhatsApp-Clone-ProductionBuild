import React, { useContext } from "react";
import { Dialog, Typography, List, ListItem, Box, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import setting from "../../data/svg/settings.png";
import dots from "../../data/svg/3dots.png";
import { qrCodeImage } from "../../data/data";
import { AccountContext } from "../../context/AccountProvider"; // context
import { addUser } from "../../service/api"; //api

const Component = styled(Box)`
	display: flex;
`;

const Container = styled(Box)`
	padding: 70px 0 56px 75px;
`;

const QRCOde = styled("img")({
	margin: "70px 0 0 65px",
	height: 264,
	width: 264,
});

const Title = styled(Typography)`
	font-size: 28px;
	margin-bottom: 25px;
	color: #525252;
	font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
		Cantarell, Fira Sans, sans-serif;
	font-weight: 300;
`;

const StyledList = styled(List)`
	& > li {
		padding: 0;
		margin-top: 15px;
		font-size: 18px;
		line-height: 28px;
		color: #4a4a4a;
	}
`;

const dialogStyle = {
	marginTop: "14%",
	height: "95%",
	width: "70%",
	maxWidth: "100%",
	maxHeight: "100%",
	borderRadius: "4px",
	boxShadow: "none",
	overflow: "hidden",
};

const Strong = styled(Box)`
	font-weight: 600;
	margin-left: 5px;
`;

const LoginDialog = () => {
	// context
	const { setAccount } = useContext(AccountContext);

	// icons
	const settingIcon = <img src={setting} alt="setting" />;
	const dotsIcon = <img src={dots} alt="dots" />;

	// login
	const onLoginSuccess = async (res) => {
		const decode = jwt_decode(res.credential);
		console.log(decode);
		setAccount(decode);
		await addUser(decode);
	};

	const onLoginFail = (res) => {
		console.log("Login Failed", res);
	};

	return (
		<>
			<Dialog
				open={true}
				PaperProps={{ sx: dialogStyle }}
				hideBackdrop={true}
				maxWidth={"md"}
			>
				<Component>
					<Container>
						<Title>Use WhatsApp on your computer</Title>
						<StyledList>
							<ListItem>1. Open WhatsApp on your phone</ListItem>
							<ListItem>
								2. Tap <Strong>Menu</Strong> &nbsp;{dotsIcon}&nbsp; or
								<Strong>Settings</Strong> &nbsp;
								{settingIcon}
								&nbsp; and select <Strong> Linked Devices</Strong>
							</ListItem>
							<ListItem>
								3. Tap on <Strong>Link a Device</Strong>
							</ListItem>
							<ListItem>
								4. Point your phone to this screen to capture the code
							</ListItem>
						</StyledList>
					</Container>
					<Box style={{ position: "relative" }}>
						<QRCOde src={qrCodeImage} alt="qrcode" />
						<Box
							style={{
								position: "absolute",
								top: "50%",
								transform: "translateX(15%) translateY(-25%)",
							}}
						>
							<GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFail} />
						</Box>
					</Box>
				</Component>
			</Dialog>
		</>
	);
};

export default LoginDialog;
