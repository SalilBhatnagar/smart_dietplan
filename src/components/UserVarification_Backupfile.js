import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Flag from '../components/images/india.jpg'

import otpContext from './otpContext';
import { firebase, auth } from '../components/Firebase';
import { useHistory } from "react-router-dom";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    const {optTrack,setOptTrack, currentMobile,setCurrentMobile} = useContext(otpContext);
    const [selected, setSelected] = useState("");
    const [number, setNumber] = useState("");
    const [numberErr, setNumberErr]=useState("");

    const history = useHistory();

    function signin()  {
  
        // if (number === "" || number.length < 10) return;
      console.log(" opt cheing")
        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(number, verify).then((result) => {
            console.log(result);
            setOptTrack(result)
            console.log("code sent"); history.push("/Otp");
            // setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }
    const handleSubmit = (event) => {
        
        event.preventDefault();

        // const data = new FormData(event.currentTarget);
        console.log({
            contryselect: selected,
            number: number
        });

  // Sent OTP
   setCurrentMobile(number)
    signin()
    };

  

    return (
        <ThemeProvider theme={theme}>
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
                    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
                    {/* <LockOutlinedIcon /> */}
                    {/* </Avatar> */}
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    {/* <Typography component="h6" variant="h6"> */}
                    <span className="span-heading1">Welcome to kapiva</span>
                    {/* </Typography> */}
                    <span className="span-heading-container">
                        <h6 className="h6-heading2">Enter your mobile number and we will send you</h6>
                        <h6 className="h6-heading3">an OTP for verifiction.</h6>
                    </span>

                    <Box component="form"  noValidate sx={{ mt: 1 }}>

                        <ReactFlagsSelect
                            countries={["IN"]}
                            customLabels={{ IN: "india" }}
                            //    placeholder="Select Language"
                            selected={selected}
                            onSelect={(c) => setSelected(c)}
                        />
                       
                        <TextField
                           onChange={(e)=>setNumber("+91"+e.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            placeholder='Enter you number'
                            name="number"
                            type="number"
                            autoComplete="number"
                        />
                        <span className="span-number-err">{numberErr}</span>

                        <Button onClick={(e)=>handleSubmit(e)}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Countinue
                        </Button>
                        <div id="recaptcha-container"></div>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}