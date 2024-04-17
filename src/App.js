import './App.css';
import Navbar from './component/Navbar';
import Form from './component/Forms';
import Alert from './component/Alert';
import About from './component/Aboutform';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      meg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const removeBodyClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const togglemode = (cls) => {
    removeBodyClass();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'gray';
      showalert('convert into dark mode', 'success');
      document.title = 'TextUtiles - Darkmode';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert('convert into light mode', 'success');
      document.title = 'TextUtile - Lightmode';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Karachi" aboutText="About Karachi" mode={mode} togglemode={togglemode} />
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <Form showalert={showalert} heading="Enter the Text Here" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
