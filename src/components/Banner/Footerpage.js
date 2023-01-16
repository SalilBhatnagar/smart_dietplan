import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Ditebanner from '../images/smart_chart.svg';
import Free from '../images/diet_free.png';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footerpage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin=()=>{
    return(
      <>
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
               Get A Coustomised Diet Plan
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid item xs={12}>
         <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className='div-img'>
                <img src={Ditebanner} width="10%"/>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="div-footer">
                    <a>Get A Coustomised Diet Plan</a><img className='span-footer-free' src={Free}/>
                    
                    {/* <span className='span-footer-free'>Free</span> */}
                </div>
            </Grid>
         </Grid>
      </Grid>
      {handleLogin()}
    </Box>
  );
}