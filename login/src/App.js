// import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import login from "./components/login";
import addPatient from './components/addPatient';
import manageDoctor from './components/manageDoctor';
import manageInpatient from './components/manageInpatient';
import manageOutpatient from './components/manageOutpatient';
import managePharmacist from './components/managePharmacist';
import manageReceptionist from './components/manageReceptionist';

function App() {
  return (
  <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Switch>
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route exact path="/" component={manageReceptionist} />
        
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route path="/addPatient" component={addPatient} />
        
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route path="/login" component={login} />
  
          
        {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
        <Redirect to="/" />
      </Switch>
    </Router>
  </>
  );
}

export default App;
