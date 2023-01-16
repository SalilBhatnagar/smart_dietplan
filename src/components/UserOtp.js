// import React,{useState} from "react";
// import OTPInput, { ResendOTP } from "otp-input-react";

// function UserOtp() {
//   const [OTP, setOTP] = useState("");
//   return (
//     <>
//       <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
//       {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
//     </>
//   );
// }

// export default UserOtp;

import React, { useState , useEffect} from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useHistory, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import otpContext from "./otpContext";
import { firebase, auth } from "../components/Firebase";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

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

const theme = createTheme();

export default function Otp() {
    const history = useHistory();
    const { optTrack, setOptTrack, currentMobile, setCurrentMobile, display, setDisplay,otpPage, setOtppage } =
        useContext(otpContext);
    //   let contactNumber = toString(currentMobile.split("+91")[1]);
    let contactNumber = "6125632659";
    console.log(typeof contactNumber);
    useEffect(()=>{
        setOtppage(true)
    },[])
    const [OTP, setOTP] = useState("");
    const [mesError, setMesError] = useState(false);
    // Validate OTP
    const ValidateOtp = () => {
        if (OTP === null || optTrack === null) return;
        optTrack
            .confirm(OTP)
            .then((result) => {
                setMesError(false);
                // console.log(data);
                // alert("success");

                getDietPlannerurl(contactNumber);
            })
            .catch((err) => {
                //alert("Wrong code");

                setMesError(true);
            });
    };

    const getDietPlannerurl = (contactNumber) => {
        const data = {
            mobile: contactNumber,
        };
        axios(`https://kapiva.app/api/smart_diet_planner.php?p=user_details`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: "PHPSESSID=j8vrusf9atiunom5ru0bkktssk",
            },
            data: data,
        }).then((response) => {
            let responseData = response.data;
            console.log(responseData);
            let accessToken = responseData.user_details[0].user_access_token;
            window.location.replace(
                `https://onboarding.smartdietplanner.com/read?token=${accessToken}&clientId=kapiva&type=1`
            );
        });
    };

    const handleOpt = (event) => {
        event.preventDefault();
        ValidateOtp();
        console.log({
            otp: OTP,
        });
    };

    function goToVerificationPage(){
        // this will handel the close button in home/Index page as well as hide and show display on Mobile verification
        setOtppage(false);
        setDisplay(!display)
    }
    function otpSend() {
        // if (number === "" || number.length < 10) return;
        console.log(" opt cheing");
        let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
        auth
            .signInWithPhoneNumber(currentMobile, verify)
            .then((result) => {
                console.log(result);
                setOptTrack(result);
                console.log("code sent");
                // setshow(true);
            })
            .catch((err) => {
                alert(err);
                window.location.reload();
            });
    }
    function resendOTP1() {
        console.log("calling resent OTP");
        otpSend();
    }

    return (
        <>
        
        <span style={{padding : "20px"}}onClick ={()=>goToVerificationPage()} className="span-back-btn">
                        <div > <ArrowBackIcon /></div>

                  </span>
        <div className="div-mainotp">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                
                  <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                      <CssBaseline />
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
                          <span className="span-otp-vari">OTP Varification</span>
                        </Typography>
                        <span className="span-heading-container">
                          <h6 className="h6-heading4">
                            Veriry your phone number the OTP send to
                          </h6>
                          <h6 className="h6-heading5">
                            the number{" "}
                            <span className="span-no">{currentMobile}</span>
                          </h6>
                        </span>
                        {/* <Box component="form" noValidate sx={{ mt: 1 }}> */}
                        <div>
                                <div className="div-otp-contain">
                                    <OTPInput
                                    value={OTP}
                                    onChange={setOTP}
                                    autoFocus
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    secure
                                    />
                                </div>
                                <div style={{ textAlign: "center", color: "red" , marginTop: "10%"}}>
                                    {mesError ? "Wrong OTP" : ""}
                                </div>
                                <div className="div-resendOtp">
                                    <span className="span-otp-dis">
                                    Didn't receive an OTP?
                                    </span>
                                    <ResendOTP
                                    className="otp-btn"
                                    onResendClick={() => resendOTP1()}
                                    ><span id="span-resendOtp">ResendOTP</span></ResendOTP>
                                </div>
                                <Button
                                    onClick={(e) => handleOpt(e)}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    <span className="span-submit-btn">SUBMIT</span>
                                </Button>
                                </div>
 
                      
                          <div id="recaptcha-container"></div>
                        {/* </Box> */}
                      </Box>
                      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
                    </Container>
                  </ThemeProvider>
               
              </Grid>
            </Grid>
          </Box>
        </div>
      </>
    );
}
