import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Signin from './Signin';
import Signup from './Signup';
import SocialMedia from '../../../components/common/SocialMedia';
import Copyright from '../../../components/common/Copyright';
import ForgotPassword from './ForgotPassword';

function Footer() {
	return (
		<Grid container justify="space-evenly" alignContent="space-around" direction="column">
			<Grid item>
				<Copyright textColor="black" />
			</Grid>
			<Grid item>
				<SocialMedia />
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/collection/9344848)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: "#450559",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(0, 3, 0, 3),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: "center",
		height: "100%"
	}
}));

const LandingPage = () => {
    const classes = useStyles();
    const [toggleLogin, setToggleLogin] = useState("login");

    function handleToggle(page) {
        setToggleLogin(page);
    }

    return (
        <Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid style={{ background: "linear-gradient(300deg, #ccfffc, #d4e5ff)" }} className="tw-text-black" item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					{ toggleLogin === "login" ? 
						<Signin handleToggle={handleToggle}/> 
					: (toggleLogin === "signup" ?
						<Signup handleToggle={handleToggle}/> 
					: <ForgotPassword handleToggle={handleToggle} /> )
					}
					<Box className="tw-mt-6 sm:tw-mt-10">
						<Footer />
					</Box>
				</div>
			</Grid>
        </Grid>
    );
}

export default LandingPage;
