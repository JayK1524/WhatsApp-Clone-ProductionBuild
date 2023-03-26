import React, { useContext, useEffect, useState } from "react";
import { Box, Divider, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider"; //context
import { getUser } from "../../../service/api"; //api
import Conversation from "./Conversation"; // component

const Component = styled(Box)`
	overflow: overlay;
	height: 81vh;
`;

const DividerLine = styled(Divider)`
	margin: 0 0 0 70px;
	background-color: #e9edef;
	opacity: 0.6;
`;

const Conversations = ({ text }) => {
	const [users, setUsers] = useState([]); //user state
	const { account, socket, setActiveUsers } = useContext(AccountContext); // context

	useEffect(() => {
		const fetchData = async () => {
			let data = await getUser();
			let filteredData = data.filter((user) =>
				user.name.toLowerCase().includes(text.toLowerCase())
			);
			console.log(filteredData);
			setUsers(filteredData);
		};
		fetchData();
	}, [text]);

	useEffect(() => {
		socket.current.emit("addUser", account);
		socket.current.on("getUsers", (users) => {
			setActiveUsers(users);
		});
	}, [account, socket, setActiveUsers]);

	return (
		<Component>
			{users.map(
				(user, index) =>
					user.sub !== account.sub && (
						<>
							<Conversation user={user} />
							<DividerLine />
							{/* {users.length !== index + 1 && <DividerLine />} */}
						</>
					)
			)}
		</Component>
	);
};

export default Conversations;
