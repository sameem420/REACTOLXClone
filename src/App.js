import React from 'react';
import Greetings from './Greetings';

function App({name,age}) {
  return (
    <div>
      <h1>Hellow World From {name}. My age is {age}</h1>
      <Greetings name={name} />
      
      <ul>
      <h5>Things I Like</h5>
        <li>Chicken Karahi</li>
        <li>Biryani</li>
      </ul>

      <ol>
      <h5>Things I do in the morning</h5>
        <li>Praying</li>
        <li>Exercise</li>
      </ol>

      <p>Adding Numbers 6 + 6 = {6+6}</p>
      <p>Multiplying Numbers 6 * 6 = {6*6}</p>
    </div>
  );
}

export default App;
