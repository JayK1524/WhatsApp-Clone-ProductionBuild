import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext();

const AccountProvider = ({ children }) => {
	const [account, setAccount] = useState();
	const [activeUsers, setActiveUsers] = useState([]);
	const [newMessageFlag, setNewMessageFlag] = useState(false);

	const socket = useRef();

	useEffect(() => {
		socket.current = io("https://whatsapp-clone-83cb.onrender.com");
	}, []);

	return (
		<AccountContext.Provider
			value={{
				account,
				setAccount,
				socket,
				activeUsers,
				setActiveUsers,
				newMessageFlag,
				setNewMessageFlag,
			}}
		>
			{children}
		</AccountContext.Provider>
	);
};

export default AccountProvider;
