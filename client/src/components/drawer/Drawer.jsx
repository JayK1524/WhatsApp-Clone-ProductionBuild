import React from "react";
import { styled, Drawer, Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const Header = styled(Box)`
	background: #008069;
	height: 107px;
	color: #ffffff;
	display: flex;
	& > svg,
	& > p {
		margin-top: auto;
		padding: 15px;
		font-weight: 600;
	}
`;

const Component = styled(Box)`
	background: #ededed;
	height: 100%;
`;

const Text = styled(Typography)`
	font-size: 20px;
`;

const drawerStyle = {
	left: 0,
	top: 0,
	height: "100%", //95.2
	width: "29.5%", //29.5
	boxShadow: "none",
};

const ProfileDrawer = ({ open, setOpenDrawer }) => {
	const handleClose = () => {
		setOpenDrawer(false);
	};

	return (
		<Drawer
			open={open}
			onClose={handleClose}
			PaperProps={{ sx: drawerStyle }}
			style={{ zIndex: 1500 }}
		>
			<Header>
				<ArrowBack
					onClick={() => setOpenDrawer(false)}
					style={{ marginBottom: "2.5px", cursor: "pointer" }}
				/>
				<Text>Profile</Text>
			</Header>
			<Component>
				<Profile />
			</Component>
		</Drawer>
	);
};

export default ProfileDrawer;
