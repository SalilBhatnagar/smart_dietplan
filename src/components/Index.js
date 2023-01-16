import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Ditebanner from "../components/images/ditebanner.jpg";
import { Link } from "react-router-dom";
import UserVarificationNo from "../components/UserVarificationNo";
import Otp from "./UserOtp";


// card image
import Diteplan from "../components/images/alpha_dietplaner.svg";
import Healthyrecipes from "../components/images/healthy.svg";
import Smarttraker from "../components/images/smart_traker.svg";
import StartChart from "../components/images/smart_chart.svg";
import Start from "../components/images/star.svg";

// banner image
// import Banner1 from '../components/images/Smart-Diet-banner_1.jpg'
import Banner from "./Banner/Bannerpage";

import FreeDiet from "../components/images/diet_free.png";

// screen short image
import ScreenShort1 from "../components/images/screenshort1.png";
import ScreenShort2 from "../components/images/screenshort2.png";

// card story image
import card1 from "../components/images/cardimg1.webp";
import card2 from "../components/images/cardimg2.webp";
import card3 from "../components/images/cardimg3.webp";
import card4 from "../components/images/cardimg4.webp";

// footer
// import Footer from '../components/Footer/Footerpage'

// popup bax add import
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import otpContext from "./otpContext";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Index() {
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = React.useState(false);
  const { optTrack, setOptTrack, currentMobile, setCurrentMobile, otpPage, setOtppage } =
    React.useContext(otpContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    return (
      <>
      
      <div className="div-btn-footer">
          <Button variant="outlined" onClick={handleClickOpen}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <img className="img-smartchart-img" src={StartChart} />
                </Grid>
                <Grid item xs={6}>
                  <span className="h2-btn-dietplan">
                    Get A Coustomised Diet Plan
                  </span>
                  <img className="img-FreeDiet" src={FreeDiet} />
                </Grid>
              </Grid>
            </Box>
          </Button>
        </div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                sx={{ ml: 2, flex: 1 }}
                variant="h6"
                component="div"
              ></Typography>
              <Button
                id="close-btn"
                autoFocus
                color="inherit"
                onClick={handleClose}
              ></Button>
            </Toolbar>
          </AppBar>
          {console.log(display)}
          {otpPage ? "" : <a onClick={handleClose}><span className="span-close-button">X</span></a>}
          {display !== true ? (

            <UserVarificationNo setDisplay={setDisplay} display={display} />
          ) : (

            <Otp />
          )}

        </Dialog>
      </>
    );
  };

  const handleReadMore1 = (e) => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "read more";
      moreText.style.display = "none";

    } else {
      dots.style.display = "none";
      btnText.innerHTML = "read less";
      moreText.style.display = "inline";

    }
  }

  const handleReadMore2 = (e) => {
    var dots1 = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText.innerHTML = "read more";
      moreText.style.display = "none";

    } else {
      dots1.style.display = "none";
      btnText.innerHTML = "read less";
      moreText.style.display = "inline";

    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <>

              <div className="div-dis-container-main">
                <div className="div-dis-container1">
                  <Banner/>
                </div>
                {/* <div className="div-dis-container1">
                  <h4 className="dis1">banner</h4>
                  <h3 className="dis2">need help to</h3>
                  <h1 className="dis3">curate your lifestyle?</h1>
                </div> */}
                {/* <p className="div-dis-container2">
                  <h4 className="p-dis1">
                    maintaining your health is
                    <span style={{ color: "#000", fontSize: "bold" }}>
                      70% diet & 30% exercise
                    </span>
                  </h4>
                  <br />
                  <h4 className="p-dis2">
                    Coustomise your health journey with kapiva for free!
                  </h4>
                </p> */}
              </div>
              <br />
              <div className="div-headingcontainer">
                <h3 className="dis4">why Choose</h3>
                <h1 className="dis5">A Customised diet plan?</h1>
                <br />
                <h3 className="dis6">
                  kapiva helps you personalise your diet without{" "}
                </h3>
                <h3 className="dis7">compromissing on your tast/food habit.</h3>
              </div>
              <br />
              <div className="div-card-container">
                <Grid container spacing={2}>
                  <Grid item xs={4}>

                    <div className="span-head-container1">
                      <img src={Diteplan} width="40%" />
                      <h3 className="dis8">ai-based diet plan</h3>
                      <h4 className="dis9">
                        Personalised with the help of nutrition experts
                      </h4>
                    </div>
                  </Grid>
                  <Grid item xs={4}>

                    <div className="span-head-container2">
                      <img src={Healthyrecipes} width="40%" />
                      <h3 className="dis10">healthy recipes</h3>
                      <h4 className="dis11">
                        Matching your food preferences and health goals
                      </h4>
                    </div>
                  </Grid>
                  <Grid item xs={4}>

                    <div className="span-head-container3">
                      <img src={Smarttraker} width="40%" />
                      <h3 className="dis12">smart trackers</h3>
                      <h4 className="dis13">track your health goals daily</h4>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="div-sneak-peak1">
                    <h1 className="h1-sneakpeak1">
                      sneak peak
                      <span
                        style={{
                          color: "#333333",
                          fontSize: "16px",
                          padding: "0px 6px",
                          textTransform: "uppercase",
                          fontWeight: '500'
                        }}
                      >
                        For You
                      </span>
                    </h1>
                  </div>
                  <br />

                  <div className="div-dis-container3">
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <img
                            className="screen1"
                            src={ScreenShort2}
                            alt="screenshort2"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <img
                            className="screen2"
                            src={ScreenShort1}
                            alt="screenshort1"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <div className="div-card-main-container">
                  <div className="div-sneak-peak2">
                    <h1 className="h1-sneakpeak2">REAL PEOPLE, REAL STORIES</h1>
                  </div>
                </div>
                <br />
                {/* <div className="div-card-dis">
                   
                  </div> */}
                {/* <Grid container spacing={2}> */}
                {/* <Grid item xs={12}> */}
                <div className="div-card-rating-container">
                  <Grid container>
                    <Grid item xs={6}>
                      <div className="div-card1">
                        <img className="img-card-img1" src={card1} />
                        <h5 className="dis14">Divya G, Bangalore</h5>
                        <img
                          className="img-card-star1"
                          src={Start}
                          width="15%"
                        />
                        <hr className="hr1" />
                        <p className="p-card-contain1">

                          <span>
                            Kapiva has been working miracles for me. In
                            just a few months, there was a drop in my
                            weight by 13kgs. I wish that more and more
                            people try this pro<span id="dots">...</span>
                            <span id="more">duct enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis.
                            </span>
                            <br />
                            <a onClick={(e) => handleReadMore1(e)} id="myBtn"><span className="span-readmore">read more</span></a>
                          </span>
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="div-card2">
                        <img
                          className="img-card-img2"
                          src={card2}

                        />
                        <h5 className="dis15">Divya G, Bangalore</h5>
                        <img
                          className="img-card-star2"
                          src={Start}
                          width="15%"
                        />
                        <hr className="hr2" />
                        <p className="p-card-contain2">
                          <figcaption>
                            Very effective. I felt energized after
                            consuming it for 3-4 days only. Kapiva
                            always stands true to its quality. I would
                            highly recommend it
                          </figcaption>
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="div-card3">
                        <img
                          className="img-card-img3"
                          src={card3}

                        />
                        <h5 className="dis16">Divya G, Bangalore</h5>
                        <img
                          className="img-card-star3"
                          src={Start}
                          width="15%"
                        />
                        <hr className="hr3" />
                        <p className="p-card-contain3">
                          <figcaption>
                            I could see a decent performance increase.
                            Would surely recommend it..<span id="dots1">...</span>
                            <span id="more1">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                            <br />
                            <a onClick={(e) => handleReadMore2(e)} id="myBtn1">read more</a>
                          </figcaption>
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="div-card4">
                        <img
                          className="img-card-img4"
                          src={card4}

                        />
                        <h5 className="dis17">Divya G, Bangalore</h5>
                        <img
                          className="img-card-star4"
                          src={Start}
                          width="15%"
                        />
                        <hr className="hr4" />
                        <p className="p-card-contain4">
                          <figcaption>
                            After using this Himalayan Shilajit, I don't
                            feel lethargic even after 12 working hours.
                            It has also improved my sexual performance
                            to the next level. I have seen changes and
                            progress with time.
                          </figcaption>
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                {/* </Grid> */}
              </Grid>

              {/* </Grid> */}
              <br /><br />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="login-handle-btn">{handleLogin()}</div>
                </Grid>
              </Grid>
              <br /><br/><br/>
            </>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
