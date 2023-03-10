import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './components/Header/Header';

import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AllClasses from './components/AllClasses/AllClasses';
import MyClasses from './components/MyClasses/MyClasses';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Cart from './components/Cart/Cart';

export const cartValue = createContext ();

function App() {
  const [value,setValue] = useState([]);
  return (
    <div>
       <cartValue.Provider value={[value,setValue]}>
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/all_classes">
            <AllClasses></AllClasses>
          </Route>
          <Route path="/my_classes">
            <MyClasses></MyClasses>
            </Route>
            <Route path="/cart">
            <Cart></Cart>
          </Route>
            <Route path="/course/:courseId">
            <CourseDetail></CourseDetail>
          </Route>
          
          <Route exact path="/">
          <Home></Home>
          </Route>   
         


          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
      </Router>


      <Footer></Footer>
      </cartValue.Provider>

    </div>
   



  );
}

export default App;
