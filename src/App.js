import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
const App = () => {
  const [mode, setMode] = useState('light');
  const enabledark=()=>{
    if (mode==='light'){
      document.body.style.backgroundColor='gray';
      setMode('dark')
    }
    else{
      document.body.style.backgroundColor='white';
      setMode('light')
    }
  }
  return (
    <>
    {/* <Router>
      <Navbar mode={mode} enabledark={enabledark} heading='Change Text'/>
      <Routes>
        <Route path="/" element={<Home mode={mode} heading='Change Text' />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router> */}
    <Navbar mode={mode} enabledark={enabledark} heading='Change Text'/>
    <Textform mode={mode} heading='Change Text' />
    </>
  );
  
};


export default App;
