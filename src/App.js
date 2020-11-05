import Header from "./Components/Header";
import Main from './Components/Main'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import About from './Components/About'
import Contacts from "./Components/Contacts";
import React from 'react'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route component={Main} path='/' exact></Route>
          <Route component={Services} path='/services' exact></Route>
          <Route component={Projects} path='/projects' exact></Route>
          <Route component={About} path='/about' exact></Route>
          <Route component={Contacts} path='/contacts' exact></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;
