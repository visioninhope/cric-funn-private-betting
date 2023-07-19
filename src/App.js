import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { isEmpty } from 'lodash';
import LoadingScreen from 'react-loading-screen';

import './App.css';
import { ContextProvider } from './global/Context';
import LoggedInRoutes from './modules/loggedInRoutes/LoggedInRoutes';
import LoggedOutRoutes from './modules/loggedOutRoutes/LoggedOutRoutes';
import cricFunnLogo from './images/logo.png';

const App = () => {
	const contextConsumer = useContext(ContextProvider);
	const { loading, loggedInUserDetails } = contextConsumer;

	return (
		<Router>
			<LoadingScreen
				loading={loading}
				bgColor="rgb(17,24,39)"
				spinnerColor="#fff"
				textColor="#fff"
				text="Loading your details. Please wait..."
				logoSrc={cricFunnLogo}
			>
				{!isEmpty(loggedInUserDetails) ?
					<LoggedInRoutes /> : <LoggedOutRoutes /> }
			</LoadingScreen>
		</Router>
	);
}

export default App;
