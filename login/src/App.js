// import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import login from "./components/login";
import AddPatient from './components/AddPatient';
// import manageDoctor from './components/manageDoctor';
// import manageInpatient from './components/manageInpatient';
// import manageOutpatient from './components/manageOutpatient';
// import managePharmacist from './components/managePharmacist';
// import manageReceptionist from './components/manageReceptionist';
import EditDoctor from './components/EditDoctor';
import EditInpatient from './components/EditInpatient';
import EditOutpatient from './components/EditOutpatient';
import EditReceptionist from './components/EditReceptionist';
import EditPharmacist from './components/EditPharmacist';
import EditAppointments from './components/EditAppointments';
import EditQueries from './components/EditQueries';
import EditReports from './components/EditReports';
import EditRoom from './components/EditRoom';
import EditRooms from './components/EditRooms';
import EditInventory from './components/EditInventory';
// import manageInventory from "./components/ManageInventory";
import addMedicine from "./components/AddMedicine";
import AddMedicine from "./components/AddMedicine";
function App() {
  return (
  <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Switch>
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route exact path="/" component={EditInventory} />
        
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route path="/addPatient" component={AddPatient} />
        
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
