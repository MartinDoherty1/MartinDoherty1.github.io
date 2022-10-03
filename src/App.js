import React from 'react';
import './App.css';
import ImageHolder from './Components/ImageHolder/ImageHolder';
import QuickDetails from './Components/QuickDetails/QuickDetails';
import AboutInterests from './Components/AboutInterests/AboutInterests';
import Bottom from './Components/Bottom/Bottom';

function App() {
  return (
    <div className='container'>
      <div className="App">
        <ImageHolder/>
        <QuickDetails/>
        <AboutInterests/>
        <Bottom/>
      </div>
    </div>

  );
}

export default App;
