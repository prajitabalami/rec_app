import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import AddUser from './components/AddUser';
import Nav_bar from './components/Nav_bar';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import ViewDetails from './components/ViewDetails';
import UpdateDetails from './components/UpdateDetails';
import SearchResult from './components/SearchResult';


class App extends React.Component {
  constructor(props){
    super(props)
      this.state={
        viewHome:true,
        viewAddUser:false,
      }
    
  }
 render(){
   return(
     <Router>
        <div>
       <Nav_bar/>
       <Switch>
         <Route exact path="/" component={Homepage}/>
         <Route exact path="/add_user" component={AddUser}/>
         <Route exact path="/emp_details/:id" component={ViewDetails}/>
         <Route exact path="/update_details/:id" component={UpdateDetails}/>
         <Route exact path="/search_result/:searchText" component={SearchResult}/>
       <Homepage/>
       <AddUser/>

       </Switch>
      

     </div>

     </Router>
     
    
   )
 }
}

export default App;
