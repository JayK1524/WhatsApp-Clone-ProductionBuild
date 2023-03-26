import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

const MenuOption = styled(MenuItem)`
	font-size: 14px;
	padding: 5px 60px 5px 24px;
	color: #4a4a4a;
`;

const HeaderMenu = ({ setOpenDrawer }) => {
	const [open, setOpen] = useState(false);

	const handleClick = (event) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => {
		setOpen(null);
	};

	return (
		<>
			<MoreVert onClick={handleClick} style={{ cursor: "pointer" }} />
			<Menu
				anchorEl={open}
				keepMounted
				open={open}
				onClose={handleClose}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				style={{ marginTop: "3px" }}
			>
				<MenuOption
					onClick={() => {
						handleClose();
						setOpenDrawer(true);
					}}
				>
					Profile
				</MenuOption>
			</Menu>
		</>
	);
};

export default HeaderMenu;
