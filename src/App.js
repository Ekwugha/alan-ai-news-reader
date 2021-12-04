import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


const alankey = process.env.REACT_APP_ALAN_KEY;

const App = () => {

  useEffect(() => {
    alanBtn({
      key: alankey
    })
  }, [])

  return (
    <div className="App">
      <h1>Alan AI News App</h1>
    </div>
  );
}

export default App;
