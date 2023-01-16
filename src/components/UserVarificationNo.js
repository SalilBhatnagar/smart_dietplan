import React, { useState, useEffect } from "react";
import { In } from "react-flags-select";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

// otp
import OtpComponent from './UserOtp';
import otpContext from "./otpContext";
import { firebase, auth } from "../components/Firebase";


function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const Region = () => (
    <div>
        <In /> India
    </div>
);

const theme = createTheme();
const ErrorStyle = { color: "#fb0000", paddingLeft: "10px", fontSize: ".85em" };
const SignIn = () => {
    const { optTrack, setOptTrack, currentMobile, setCurrentMobile, display, setDisplay } = useContext(otpContext);
    const [selected, setSelected] = useState("");
    const [number, setNumber] = useState("");
    const [error, setError] = useState({
        contactNumber: false,
        countryCode: false,
        noError: 1, // this will hide the div content 1= initial state(dont Hide) 2=form edit (dont Hide) 3= form Submitted (disable the content for basic ui/ux visual)
    });

    const history = useHistory();
    const setInternationCode = () => {
        // Make it internation code with module or extract code with for loop for list of country
        return selected === "IN" ? "+91" : false;
    };
    function signin() {
        // if (number === "" || number.length < 10) return;
        console.log(" opt cheing");
        let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
        const OtpNumber = String(setInternationCode()) + number;
        auth
            .signInWithPhoneNumber(OtpNumber, verify)
            .then((result) => {
                console.log(result);
                setOptTrack(result);
                console.log("code sent");
                setError({ ...error, noError: 2 })
                setDisplay(!display);
                // history.push("/Otp");
                // setshow(true);
            })
            .catch((err) => {
                alert(err);
                setError({ ...error, noError: 2 });
                window.location.reload();
            });
    }


    useEffect(() => {
        if (number.length < 1) {
        } else {
            if (!phonevalidation()) {
                setError({ ...error, contactNumber: true });
            } else {
                setError({ ...error, contactNumber: false });
            }
        }
    }, [number]);

    const phonevalidation = () => {
        // console.log("validitaing :", number)
        const checkNumber = String(number).substring(3);
        const regexExp = /^[6-9]\d{9}$/gi;
        if (regexExp.test(checkNumber)) {
            console.log(" number valid")
            return true;
        } else {
            return false
        }
    }

    const handelNumber = (e) => {
        setNumber("+91" + e.target.value);
    };
    const setCountry = (c) => {
        console.log(" this is the country", c);
        setError({ ...error, countryCode: false });
        setSelected(c);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        console.log({
            contryselect: selected,
            number: number
        });
        setCurrentMobile(number)
        // Sent OTP
        // if (phonevalidation() && selected.trim()) { country code validation removed as requested if needed in future please remove this comment
        if (phonevalidation()) {
            setError({ ...error, noError: 3 })
            signin();
        } else {
            if (!phonevalidation()) { setNumber(0) };
            // if (!selected.trim()) { setError({ ...error, countryCode: true }) };
        }
    };

    const ContentDisable = { pointerEvents: "none", opacity: 0.3 };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {display ? <OtpComponent /> :
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
                        {/* <LockOutlinedIcon /> */}
                        {/* </Avatar> */}
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        {/* <Typography component="h6" variant="h6"> */}
                        <span className="span-heading1">Welcome to kapiva!</span>
                        {/* </Typography> */}
                        <span className="span-heading-container">
                            <h6 className="h6-heading2">
                                Enter your mobile number and we will send you
                            </h6>
                            <h6 className="h6-heading3">an OTP for verifiction.</h6>
                        </span>

                        <Box
                            component="form"
                            noValidate
                            sx={{ mt: 1 }}
                            style={error.noError === 3 ? ContentDisable : {}}>

                            <div className="div-defult-flage">
                                <span className="span-region-flage">{Region()}</span>
                            </div>

                            <span className="span-number-err" style={ErrorStyle}>
                                {error.contactNumber ? "Please enter a valid Mobile Number" : ""}
                            </span>
                            <br />
                            {/* <span className="span-call-icon"><CallIcon/></span> */}
                            <TextField
                                onChange={(e) => handelNumber(e)}
                                margin="normal"
                                required
                                fullWidth
                                placeholder="Mobile number"
                                name="number"
                                //   type="number"
                                autoComplete="number"
                                style={{ marginTop: "-2px" }}
                            />
                            {/* <span className="span-no-no">0/10</span> */}
                            <Button
                                onClick={(e) => handleSubmit(e)}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                <span className="span-submit-btn">Countinue</span>
                            </Button>
                        </Box>
                        <div id="recaptcha-container"></div>
                    </Box>}
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
};

export default SignIn;
