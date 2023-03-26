import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import { defaultProfilePicture } from "../../../data/data.js";
import { AccountContext } from "../../../context/AccountProvider";

const HeaderComponent = styled(Box)`
	height: 44px;
	background: #ededed;
	padding: 8px 16px;
	display: flex;
	align-items: center;
`;

const Image = styled("img")({
	width: 40,
	height: 40,
	objectFit: "cover",
	borderRadius: "50%",
});

const Name = styled(Typography)`
	margin-left: 12px !important;
`;

const Status = styled(Typography)`
	font-size: 12px !important;
	color: rgb(0, 0, 0, 0.6);
	margin-left: 12px !important;
`;

const IconContainer = styled(Box)`
	margin-left: auto;
	& > svg {
		padding: 8px;
		font-size: 22px;
		color: #000;
	}
`;

const ChatHeader = ({ person }) => {
	const url = person.picture || defaultProfilePicture;
	const { activeUsers } = useContext(AccountContext);

	return (
		<HeaderComponent>
			<Image src={url} alt="profile pic" />
			<Box>
				<Name>{person.name}</Name>
				<Status>
					{activeUsers?.find((user) => user.sub === person.sub)
						? "Online"
						: "Offline"}
				</Status>
			</Box>
			<IconContainer>
				<Search />
				<MoreVert />
			</IconContainer>
		</HeaderComponent>
	);
};

export default ChatHeader;
