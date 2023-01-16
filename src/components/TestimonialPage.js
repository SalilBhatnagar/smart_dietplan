import React,{useState,useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BrandNesSlider() {
  // const classes = useStyle();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:4,
    arrow:true,
    slidesToShow: 1,
   slidesToScroll: 1,
  autoplay: true,
  // autoplaySpeed: 2000,
  };
  
  return (
    <div className="div_slider">
            <Slider {...settings}>
            {/* 1 */}
              <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                     <div>
                        <Card sx={{ maxWidth: 1565 }}>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={4}>  
                                <img src="http://localhost:3000/img/a0.jpg" width="80%" height="75%"/>
                              </Grid>
                              <Grid item xs={8}>  
                               <div className='div_testimonial-text'>
                               Started using Slim Shake from Kapiva and it works
                               out very wellIt helps me in reducing my hunger thus resulting in weight loss
                               Definitely worth trying and using it regularly 👍🏻
                               </div>
                              </Grid>
                             </Grid> 
                          </CardContent>
                        </Card>
                      </div>
                    
                    </Grid>
                  </Grid>
               </div>
                 {/* 2 */}
                      <div>
                        <Card sx={{ maxWidth: 1565 }}>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={4}>  
                                <img src="http://localhost:3000/img/a1.jpg" width="80%" height="75%"/>
                              </Grid>
                              <Grid item xs={8}>  
                               <div className='div_testimonial-text'>
                               Started using Slim Shake from Kapiva and it works
                               out very wellIt helps me in reducing my hunger thus resulting in weight loss
                               Definitely worth trying and using it regularly 👍🏻
                               </div>
                              </Grid>
                             </Grid> 
                          </CardContent>
                        </Card>
                      </div>
                      {/* 3 */}
                      <div>
                        <Card sx={{ maxWidth: 1565 }}>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={4}>  
                                <img src="http://localhost:3000/img/a2.png" width="80%" height="75%"/>
                              </Grid>
                              <Grid item xs={8}>  
                               <div className='div_testimonial-text'>
                               Started using Slim Shake from Kapiva and it works
                               out very wellIt helps me in reducing my hunger thus resulting in weight loss
                               Definitely worth trying and using it regularly 👍🏻
                               </div>
                              </Grid>
                             </Grid> 
                          </CardContent>
                        </Card>
                      </div>
                      {/* 4 */}
                      <div>
                        <Card sx={{ maxWidth: 1565 }}>
                         <CardContent>
                         <Grid container spacing={2} columns={16}>
                              <Grid item xs={4}>  
                                <img src="http://localhost:3000/img/a1.jpg" width="80%" height="75%"/>
                              </Grid>
                              <Grid item xs={8}>  
                               <div className='div_testimonial-text'>
                               Started using Slim Shake from Kapiva and it works
                               out very wellIt helps me in reducing my hunger thus resulting in weight loss
                               Definitely worth trying and using it regularly 👍🏻
                               </div>
                              </Grid>
                             </Grid> 
                          </CardContent>
                        </Card>
                      </div>
              </Slider>
      </div>
   
  );
 
}

   