import React, {Component} from 'react';
import {HeadingText} from './HeadingText';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Logo} from './Logo';

export class HeaderSection extends Component{
	constructor(props) {
		super(props);
	}
	
	render(){
		console.log('height -> '+this.props.height);
		console.log('margin -> '+this.props.margin)
		return(
			<div class="header-intro">
				{/*
				<Navbar color="inverse" light expand="md" className="header-nav">
					<NavbarBrand><Logo/></NavbarBrand>
				</Navbar>
				*/}
				<HeadingText />
			</div>
		)
	}
}