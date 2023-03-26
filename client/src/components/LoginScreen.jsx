import React, { useContext } from "react";
import { AppBar, Toolbar, Box, styled } from "@mui/material";
// context
import { AccountContext } from "../context/AccountProvider";
// components
import LoginDialog from "./login/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
	height: 100vh;
	background: #dcdcdc;
`;

const Header = styled(AppBar)`
	background-color: #00a884;
	height: 125px;
	box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
	background-color: #00a884;
	height: 200px;
	box-shadow: none;
`;

const LoginScreen = () => {
	const { account } = useContext(AccountContext);

	return (
		<Component>
			{account ? (
				<>
					<Header>
						<Toolbar></Toolbar>
					</Header>
					<ChatDialog />
				</>
			) : (
				<>
					<LoginHeader>
						<Toolbar></Toolbar>
					</LoginHeader>
					<LoginDialog />
				</>
			)}
		</Component>
	);
};

export default LoginScreen;
