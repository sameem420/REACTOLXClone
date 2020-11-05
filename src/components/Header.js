import React, { useState } from 'react';
import olx_logo from '../assets/olx logo.png';
import './Header.css';
import sell from '../assets/sell.png';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Link } from 'react-router-dom';

const Header = () => {

    const categories = [
        { id: 1, Name: 'Mobile Phones' },
        { id: 2, Name: 'Cars' },
        { id: 3, Name: 'Motorcycles' },
        { id: 4, Name: 'Houses' },
        { id: 5, Name: 'TV-Video-Audio' },
        { id: 6, Name: 'Tablets' },
        { id: 7, Name: 'Lands & Plots' },
    ]

    const [display, setDisplay] = useState(false)

    let showlist = () => {
        setDisplay(true)
        console.log('true')
    }
    let hidelist = () => {
        setDisplay(false)
        console.log('false')
    }


    return (
        <div className='header-body'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <Link to='/' className="navbar-brand mx-3"><img src={olx_logo} width='42px' height='24px' /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <div className='location'>
                                    <div className='search-icon'><i className="fas fa-search"></i></div>
                                    <input type='text' className='country' value='Pakistan'></input>
                                    <button className='icon-chevron'><i className="fas fa-chevron-down"></i></button>
                                </div>
                                <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <div className='query'>
                                    <input type='text' placeholder='Find Cars, Mobile Phones and more...' className='search'></input>
                                    <button className='search-go'><i className="fas fa-search"></i></button>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className="signin">
                                <a href='#'>
                                    Login
                            </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="sell">
                                {/* <a href="#">+ SELL</a> */}
                                <img id='sell-img' src={sell}></img>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>



        </div>
    )
}

export default Header
