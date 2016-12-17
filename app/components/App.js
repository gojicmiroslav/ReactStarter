import React from 'react';
import Nav from './Nav';

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<Nav/>
				<div className="container">
					<div className="row">
						<div>
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
