import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Shared/Header';
import Home from './components/Home/Home';
import RegisterForm from './components/RegisterForm/RegisterForm';
// import Volunteers from './components/Volunteers/Volunteers';
// import Volunteer from './components/Volunteer/Volunteer';
import Login from './components/Login/Login';
import AddEvents from './components/AddEvents/AddEvents';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/addEvents">
            <AddEvents></AddEvents>
          </Route>
          <Route path="/admindashboard">
            <AdminDashboard></AdminDashboard>
          </Route>
          <Route path='/register'>
            <RegisterForm></RegisterForm>
          </Route>
          {/* <Route path='/volunteers'>
            <Volunteers></Volunteers>
          </Route>
          <Route path='/voluteers/:id'>
            <Volunteer></Volunteer>
          </Route> */}
          <Route path="/login">
            <Login></Login>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
