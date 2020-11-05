import React from 'react';
import './Footer.css';
import SubFooter from './SubFooter';
import playImage from '../assets/playstore.png';
import appImage from '../assets/appstore.jpg';

const Footer = () => {
    return (
        <div className='footer container-fluid'>
            <div className="row foot">
                <div className="col-lg-2 col-md-4">
                    <SubFooter
                        heading="popular categories"
                        listItems={[
                            'Cars',
                            'Flats for Rent',
                            'Jobs',
                            'Mobile Phones'
                        ]} />
                </div>

                <div className="col-lg-2 col-md-4">
                    <SubFooter
                        heading="trending searches"
                        listItems={[
                            'Bikes',
                            'Watches',
                            'Books',
                            'Dogs'
                        ]} />
                </div>

                <div className="col-lg-2 col-md-4">
                    <SubFooter
                        heading="about us"
                        listItems={[
                            'about OLX group',
                            'OLX blog',
                            'contact us',
                            'OLX for business'
                        ]} />
                </div>

                <div className="col-lg-2 col-md-4">
                    <SubFooter
                        heading="OLX"
                        listItems={[
                            'help',
                            'sitemap',
                            'legal & privacy infromation'
                        ]} />
                </div>

                <div className="col-lg-4 col-md-4 px-5">
                    <div>

                        <h6>follow us</h6>
                    </div>
                    <div className='social-icons'>
                        <a href='#'><i className="fab fa-facebook"></i></a>
                        <a href='#'><i className="fab fa-twitter"></i></a>
                        <a href='#'><i className="fab fa-youtube"></i></a>
                        <a href='#'><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className='app'>
                        <a href='#'><img src={playImage} width='94px' height='26px' /></a>
                        <a href='#'><img src={appImage} width='94px' height='26px' /></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer
