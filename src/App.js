
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>
  {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
          
        }, 3000);
  
  }
  const toggleMode = ()=>
  {
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    document.title = 'My-app  Dark-Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'light';
      showAlert("light mode has been enabled","success");
      document.title = 'My-app  light-Mode';

    }

  }
  
  return (
    
   <>
<Router>
<Navbar title="My-app" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container" my-3>
<div className="container">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} />}>
            </Route>
          </Routes>
</div>
</div>
{/*<About/>*/}
</Router>


            </>
  )
}

export default App;
