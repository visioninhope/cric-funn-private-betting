import React, { useState, useContext } from 'react'
import { Button, TextField, Typography, Snackbar, InputAdornment, IconButton, makeStyles, withStyles } from '@material-ui/core';
import { Visibility, VisibilityOff, Lock } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';
import { isEmpty } from 'lodash';
import { Tag } from 'antd';

import LoaderV2 from '../../../components/common/LoaderV2';
import { ContextProvider } from '../../../global/Context';
import iplLogo from '../../../images/logo.png';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(1, 0, 1),
        borderRadius: "40px"
    }
}));

const CustomTextField = withStyles({
    root: {
        '& fieldset': {
            borderWidth: 2,
            borderRadius: "40px"
        }
    },
})(TextField);

const Signin = (props) => {
    const classes = useStyles();
    const { handleToggle } = props;
    const contextConsumer = useContext(ContextProvider) || {};
    const { signIn } = contextConsumer;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const toggleSignin = () => {
        handleToggle && handleToggle("signup");
    }

    const toggleForgotPassword = () => {
        handleToggle && handleToggle("password");
    }

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleInputs = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }

    const signInUser = async (event) => {
        setLoading(true);
        try {
            event.preventDefault();
            await signIn(inputs);
            setInputs({ email: '', password: '' });
            setError("");
        } catch (e) {
            console.log("Errs:", e);
            setError(e.message);
            setLoading(false);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        setError("");
    }

    return (
        loading ? <LoaderV2 tip="Logging In..." /> 
        : <>
            <img src={iplLogo} style={{width: 150}} />
            <Typography variant="overline" style={{ fontSize: 20, fontWeight: 500}}>
                Sign in
            </Typography>
            <form className={classes.form} onSubmit={signInUser}>
                <CustomTextField
                    variant="outlined"
                    className={"tw-mb-0 sm:tw-mb-3"}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoFocus
                    value={inputs.email}
                    onChange={handleInputs}
                />
                <CustomTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={inputs.password}
                    onChange={handleInputs}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{ background: "linear-gradient(44deg, #250c51, #605317)", color: "white" }}
                    className={classes.submit}
                >
                    <Typography variant="overline" className="tw-flex tw-items-center tw-justify-center tw-gap-2" style={{ fontSize: "medium" }}>
                        Sign In <Lock className="tw-text-2xl" />
                    </Typography>
                </Button>
                <div className="tw-flex tw-justify-between tw-mt-2">
                    <div onClick={toggleSignin} className="tw-cursor-pointer">
                        <Tag className="tw-rounded-3xl" color="blue-inverse">Create Account</Tag>
                    </div>
                    <div onClick={toggleForgotPassword} className="tw-cursor-pointer">
                        <Tag className="tw-rounded-3xl" color="volcano-inverse">Forgot Password</Tag>
                    </div>
                </div>
            </form>
            
            <Snackbar open={!isEmpty(error)} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <MuiAlert className="tw-rounded-3xl" variant="filled" onClose={handleClose} severity="error">
                    {error}
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default Signin;
