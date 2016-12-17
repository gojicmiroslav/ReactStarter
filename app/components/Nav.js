import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
	constructor(props){
		super(props);
	}

	render(){		
		return (
			<nav className="navbar navbar-static-top navbar-dark" style={{backgroundColor: "#465762"}}>
	    		<ul className="nav navbar-nav">
	    			<li className="navbar-brand"><h4 className="font-weight-bold">ReactApp</h4></li>
	      			<li className="nav-item">
	        			<IndexLink to="/" activeClassName="active" className="nav-link">Home</IndexLink>
	      			</li>
	      			<li className="nav-item">
	        			<Link to="/about" activeClassName="active" className="nav-link">About</Link>
	      			</li>
	      			<li className="nav-item">
	        			<Link to="/contact" activeClassName="active" className="nav-link">Contact</Link>
	      			</li>
			    </ul>

	    		<form className="form-inline float-xs-right nav-form">
	      			<input className="form-control" ref="search" type="search" placeholder="Enter..."/>
	      			<button className="btn btn-outline-secondary nav-form-btn" type="submit">Submit</button>
	    		</form>
	  		</nav>
		);
	}
}


export default Nav;

