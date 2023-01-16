import React from 'react';
import { Link } from 'react-router-dom';
// import NotFoundImage from '../Images/notfound2.jpg';
import NotFoundImage from '../images/notfound2.jpg';
function NotFoundPage_404(){
        return(
          <>
            <div className='div-notpage-found'>
              <img src={NotFoundImage}alt="found-image" />
              {/* <img src={PageNotFound}  /> */}
              <p style={{textAlign:"center"}}>
                <Link to="/">Go to Home </Link>
              </p>
            </div>;
          </>
        )
    }
export default NotFoundPage_404;