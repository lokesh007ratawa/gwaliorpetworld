import React from 'react';
//import "react-bootstrap/";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Home from './component/Home';
import About from './component/About';
import Gallery from './component/Gallery';
import Service from './component/Service';
import ContactUs from './component/ContactUs';
import Error from './component/Error';
import { Route,Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/gallery" component={Gallery}/>
          {/* <Route exact path="/service" component={Service}/>
          <Route exact path="/contactUs" component={ContactUs}/> */}
          <Route component={Error}/>
      </Switch>   
    </div>
  );
}

export default App;
