import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components
import Navbar from './components/presentation/Navbar';
import Landing from './components/presentation/Landing';
import Register from './components/containers/Register';
import Login from './components/containers/Login';
import { AuthProvider } from './Auth';

const Root = () => {
  return (
	<>
	  <AuthProvider>
		<Router>
		  <Navbar />
		  <Route exact path='/' component={Landing} />
		  <Route exact path='/register' component={Register} />	
		  <Route exact path='/login' component={Login} />
		  
		</Router>
	  </AuthProvider>
	</>
  )
}

export default Root;
