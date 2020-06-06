import React from 'react'; 
import './style.css'

function Greetings({name}) 
{ 
    return <div className="greetings">Hello <strong>{name}</strong>, Welcome to React!</div>; 
} 

export default Greetings;