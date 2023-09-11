// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState} from 'react'

import { BrowserRouter , Route ,Routes } from "react-router-dom";



function App() {
  let [alert , setAlert] = useState(null)

  const showAlert=(type , message)=>{
     setAlert({
         msg : message,
          type : type
     })
  }
   setTimeout(() => {
    setAlert(null);
  }, 1500);


  let [mode , setMode]= useState('light');


  const toggle = ()=>{
    console.log(mode);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("success","dark mode is enabled");
      document.title = "TextUtile-darkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success"," light mode is enabled");
      document.title = "TextUtile-lightMode";
    }
  }
  return (
    <>
<BrowserRouter>
   
   <Navbar Home = "Home" mode={mode} toggle={toggle} />
   <Alert alert={alert} />
    <div className = "container">
    <Routes>

    <Route exact path="/" element={<TextForm heading = "enter the text" mode={mode} toggle={toggle}/>}></Route>

    <Route path="/about" element = {<About/>}></Route>

  </Routes>
  

    </div>
    </BrowserRouter>
    

  
    
    </>
  );
}

export default App;
