import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Home, LockOpen, Edit } from '@material-ui/icons';

const useStyles = makeStyles({
  navbar: {
	backgroundColor: '#263238',
  },
  title: {
	fontSize: '28px',
	fontFamily: 'roboto',
  },
  links: {
	color: '#fff',
	fontSize: '16px',
	fontFamily: 'roboto',
	textDecoration: 'none',
  }
});


const Navbar = props => {
  const classes = useStyles();

  const guestLinks = (
	<>
	  <AppBar className={classes.navbar} position='static'>
		<Toolbar>
		  <TypoGraphy variant='title' className={classes.title}>
			MachineTime
		  </TypoGraphy>

		  <List component='nav'>
			<ListItem component='div'>


			  <ListItemText inset>
				<TypoGraphy color='inherit' variant='title'>
				  <Link to='/' className={classes.links}>
					Home <Home />
				  </Link>
				</TypoGraphy>
			  </ListItemText>

			  <ListItemText inset>
				<TypoGraphy color='inherit' variant='title'>
				  <Link to='/login' className={classes.links}>
					Log In <LockOpen /> 	
				  </Link>
				</TypoGraphy>
			  </ListItemText>

			  <ListItemText inset>
				<TypoGraphy color='inherit' variant='title'>
				  <Link to='/register' className={classes.links}>
				     Register <Edit />
				  </Link>
				</TypoGraphy>
			  </ListItemText>

			</ListItem>
		  </List>
		</Toolbar>
	  </AppBar>
	</>
  );

  const authLinks = (
	<ul className='navbar-nav'>
	  <li className='nav-item'>
		<Link className='nav-link' to='/profile'>Profile</Link>
	  </li>
	  <li className='navbar-nav'>
		<Link className='nav-link' to='/reserve'>Reserve</Link>
	  </li>
	</ul>
  );

  return (
	<>
	  {guestLinks}


	</>
  )

};

export default Navbar;
