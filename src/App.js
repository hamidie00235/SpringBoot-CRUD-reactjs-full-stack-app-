import React from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
       
          <HeaderComponent />
          <div className="container">
            
            <Switch>
              <Route exact path="/"   component={ListEmployeeComponent} />
              <Route path="/employees" component={ListEmployeeComponent} />
              <Route path="/add-employee" component={CreateEmployeeComponent} />
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
