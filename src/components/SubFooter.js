import React from 'react';
import './Footer.css';

const SubFooter = ({ heading, listItems }) => {
    return (
        <div className='footer'>
            <div>
                <h6>{heading}</h6>
            </div>
            <div className='list'>
                <ul>
                    {listItems.map((item, index) => {
                        return (<a href='#' key={index}><li>{item}</li></a>)
                    })}
                </ul>
            </div>


        </div>
    )
}

export default SubFooter
