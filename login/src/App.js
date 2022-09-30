// import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import login from "./components/login";
import AddDoctor from './components/AddDoctor';
import AddPatient from './components/AddPatient';
import AddInpatient from "./components/AddInpatient";
import AddOutpatient from "./components/AddOutpatient";
import AddReceptionist from "./components/AddReceptionist";
import AddPharmacist from "./components/AddPharmacist";
import AddAppointment from "./components/AddAppointment";
import AddQuery from "./components/AddQuery";
import AddReport from "./components/AddReport";
import AddRoom from "./components/AddRoom";
import AddRooms from "./components/AddRooms";
import AddMedicine from "./components/AddMedicine";
import EditAppointment from "./components/EditAppointment";
import EditDoctor from "./components/EditDoctor";
import EditInpatient from "./components/EditInpatient";
import EditOutpatient from "./components/EditOutpatient";
import EditReceptionist from "./components/EditReceptionist";
import EditPharmacist from "./components/EditPharmacist";
import AddAppointmentPatient from "./components/AddAppointmentPatient"



// import manageDoctor from './components/manageDoctor';
// import manageInpatient from './components/manageInpatient';
// import manageOutpatient from './components/manageOutpatient';
// import managePharmacist from './components/managePharmacist';
// import manageReceptionist from './components/manageReceptionist';
// import manageInventory from "./components/ManageInventory";
// import EditDoctor from './components/EditDoctor';
// import EditInpatient from './components/EditInpatient';
// import EditOutpatient from './components/EditOutpatient';
// import EditReceptionist from './components/EditReceptionist';
// import EditPharmacist from './components/EditPharmacist';
// import EditAppointment from './components/EditAppointment';
// import EditQuery from './components/EditQuery';
// import EditReport from './components/EditReport';
// import EditRoom from './components/EditRoom';
// import EditRooms from './components/EditRooms';
// import EditInventory from './components/EditInventory';
// import AddReceptionist from "./components/AddReceptionist";
// import AddAppointment from "./components/AddAppointment";

function App() {
  return (
  <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Switch>
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route exact path="/" component={AddAppointmentPatient} />
        
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
