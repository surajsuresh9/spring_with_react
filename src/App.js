import React from "react";
import Navbar from "./components/NavBar";
import Joke from "./components/Joke";
import UserComponent from "./components/UserComponent";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from "./pages/About";

const App = () => {
  return (
    <Router>

    <div className='container'>
    <Navbar />
    <Route path='/jokes' exact component={Joke}/>
    <Route path='/about' exact component={About}/>
    </div>
    </Router>
  );
};

export default App;
