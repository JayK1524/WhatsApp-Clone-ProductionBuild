import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google"; // google oauth
import AccountProvider from "./context/AccountProvider"; // context
import UserProvider from "./context/UserProvider";
import LoginScreen from "./components/LoginScreen"; // component

const App = () => {
	const clientId = "808276172535-hsf1p887o3mf9i3d47702r4se7psv3db.apps.googleusercontent.com"
	return (
		<GoogleOAuthProvider clientId={clientId}>
			<UserProvider>
				<AccountProvider>
					<LoginScreen />
				</AccountProvider>
			</UserProvider>
		</GoogleOAuthProvider>
	);
};

export default App;

