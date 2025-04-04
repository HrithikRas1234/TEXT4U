import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router, Routes,
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert}/>
        <div className="container my-3">
        
    
    <Routes>
    
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils4U- A app for you to manipulate text content" mode={mode}/>}></Route>
          <Route exact path="/about"  element={<About mode={mode} />}></Route>
          
          
    </Routes>
    </div>
            
    </Router>
    
  );
}

export default App;