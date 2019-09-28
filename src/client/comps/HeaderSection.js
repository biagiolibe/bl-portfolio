import React, {Component} from 'react';

import {HeadingText} from './HeadingText';

export default class HeaderSection extends Component{
	constructor(props) {
		super(props);
	}
	
	render(){
		return(
			<div>
				<Navbar color="inverse" light expand="md" className="header-nav">
					<NavbarBrand><Logo/></NavbarBrand>
				</Navbar>
				<HeadingText/>
			</div>
		)
	}
}