import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from "./actions/userActions";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRouter from './component/commont/PrivateRoute';
import SignIn from './component/user/signin/signin';
import Login from './component/user/login/login';
import Navbar from './component/header/header';
// import CreateProfile from './component/createProfile/createprofile';
import EditPost from './component/post/editpost/editpost'
import NewPost from './component/post/newpost/newpost';
import ListPost from './component/post/Listpost/Listpost';

import Dashboar from './component/dashboar/profile/profile';
import UpdateImage from './component/dashboar/UpdateImage';
import UpdateProfile from './component/dashboar/updateuser/Updateuser';
import Home from './component/home/home';
import Modal from './component/dashboar/testmodal'
import store from './store';
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  
    // Redirect to login
    window.location.href = '/';
  }
}
const  App=()=> {
 
  return (
    <Provider store={store}>
    <Router>
    <Navbar/>
    <div className="App">
    <Route path='/' exact component={Home}></Route>
  
    
     <Route path='/SignIn' exact component={SignIn}></Route>
     <Route path='/Login'  exact component={Login}></Route>
     <Route path='/NewPost' exact  component={NewPost}></Route>
     <Switch>
       <PrivateRouter path='/ListPost' exact component={ListPost}/>
     </Switch>
     <Route ></Route>
     <Route path='/Modal' exact component={Modal}></Route>
     <Route path='/EditPost/:id' component={EditPost}></Route>
     <Route path='/Dashboar/:id' exact component={Dashboar}/>
     <Route path='/UpdateImage/:id' exact component={UpdateImage}/>
     <Route path='/UpdateProfile/:id' exact component={UpdateProfile}/>
     </div>
    </Router>
    
  </Provider>
  );
}

export default App;
