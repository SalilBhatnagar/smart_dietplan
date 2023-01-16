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

import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import otpContext from "./otpContext";
import { firebase, auth } from "../components/Firebase";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";



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
  const { optTrack, setOptTrack, currentMobile, setCurrentMobile } =
    useContext(otpContext);
  const [OTP, setOTP] = useState("");
  const [mesError, setMesError] = useState(false);
  // Validate OTP
  const ValidateOtp = () => {
    if (OTP === null || optTrack === null) return;
    optTrack
      .confirm(OTP)
      .then((result) => {
        setMesError(false);
        alert(" success");
      })
      .catch((err) => {
        //alert("Wrong code");

        setMesError(true);
      });
  };
  const handleOpt = (event) => {
    event.preventDefault();
    ValidateOtp();
    console.log({
      otp: OTP,
    });
  };

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
      {/* <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >
                        

                        <Typography component="h1" variant="h5">
                            OTP Varification
                        </Typography>
                        <span className="span-heading-container">
                            <h6 className="h6-heading4">Veriry your phone number the OTP send to</h6>
                            <h6 className="h6-heading5">the number <span className="span-no">{currentMobile}</span></h6>
                        </span>
                        <Box component="form"  noValidate sx={{ mt: 1 }}>

                            <div className="div-otp-contain">
                                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure />

                            </div>
                             <div style={{textAlign:'center', color:'red'}}>
                               {mesError? "Wrong OTP": ""}
                            </div>
                            <div className="div-resendOtp">
                                <span className="span-otp-dis">Didn't receive an OTP?</span>
                                <ResendOTP  className="otp-btn" onResendClick={()=>resendOTP1()} />

                            </div>
                            <Button
                                onClick={(e)=>handleOpt(e)}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                SUBMIT
                            </Button>
                            <div id="recaptcha-container"></div>    
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider> */}
      <div></div>
      <div className="div-mainotp">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
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
                        OTP Varification
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
                      <Box component="form" noValidate sx={{ mt: 1 }}>
                        <div className="div-otp-contain">
                          <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            autoFocus
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            secure
                            className="input-otp-veryfy"
                          />
                        </div>
                        <div style={{ textAlign: "center", color: "red" }}>
                          {mesError ? "Wrong OTP" : ""}
                        </div>
                        <div className="div-resendOtp">
                          <span className="span-otp-dis">
                            Didn't receive an OTP?
                          </span>
                          <ResendOTP
                            className="otp-btn"
                            onResendClick={() => resendOTP1()}
                          />
                        </div>
                        <Button
                          onClick={(e) => handleOpt(e)}
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          SUBMIT
                        </Button>
                        <div id="recaptcha-container"></div>
                      </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                  </Container>
                </ThemeProvider>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
