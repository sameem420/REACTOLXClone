import React from 'react';
import footerImage from '../assets/olx_footer.png';
import playImage from '../assets/playstore.png';
import appImage from '../assets/appstore.jpg';
import './Footer.css';

const TopFooter = () => {
    return (
        <div className='container-fluid top-footer'>
            <div className='olx-footer'>

                <img src={footerImage} />
            </div>
            <div className='top-text'>
                <h3>TRY THE OLX APP</h3>
                <p>Buy, sell and find just about anything using the app on your mobile.</p>
            </div>
            <div className='line'></div>

            <div className='links'>

                <h5>get your app today</h5>
                <div className='applink'>

                    <a href='#'><img src={playImage} width='128px' height='40px' /></a>
                    <a href='#'><img src={appImage} width='128px' height='40px' /></a>
                </div>
            </div>

        </div>
    )
}

export default TopFooter
