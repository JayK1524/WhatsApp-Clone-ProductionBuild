import React, { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import Drawer from "../../drawer/Drawer";

const Component = styled(Box)`
	height: 44px;
	background: #ededed;
	display: flex;
	padding: 8px 16px;
	align-items: center;
`;
const Wrapper = styled(Box)`
	margin-left: auto;
	& > * {
		margin-left: 2px;
		padding: 8px;
		color: #000;
	}
	& :nth-child(-n + 2) {
		font-size: 22px;
		margin-right: 8px;
		margin-top: 3px;
	}
`;

const Image = styled("img")({
	height: 40,
	width: 40,
	borderRadius: "50%",
});

const Header = () => {
	const { account } = useContext(AccountContext);
	const picture = account.picture;

	const [open, setOpenDrawer] = useState(false);

	const openDrawer = () => {
		setOpenDrawer(true);
	};
	return (
		<>
			<Component>
				<Image
					src={picture}
					alt="profile pic"
					onClick={() => openDrawer()}
					style={{ cursor: "pointer" }}
				/>
				<Wrapper>
					<DonutLargeRoundedIcon />
					<MessageRoundedIcon />
					<HeaderMenu setOpenDrawer={setOpenDrawer} />
				</Wrapper>
			</Component>
			<Drawer open={open} setOpenDrawer={setOpenDrawer} />
		</>
	);
};

export default Header;
