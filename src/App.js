//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import NavBar from './Components/NavBar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const[Mode,setMode]= useState('dark');
  const[alert,setAlert]= useState(null);

  const showAlert= (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      showAlert("Ligth mode has been Enbled","success");
    }
    else{
      setMode('light');
      showAlert("Dark mode has been Enbled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <NavBar title="stardust" about="About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <Textform showAlert={showAlert} heading="Enter Some Text"/>
          {/* </Route> */}
        {/* </Switch> */}
        
      </div>
    {/* </Router> */}
    </>

  );
}

export default App;
