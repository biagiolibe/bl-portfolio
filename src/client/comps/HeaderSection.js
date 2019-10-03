import React, {Component} from 'react';
import {HeadingText} from './HeadingText';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Logo} from './Logo';

export class HeaderSection extends Component{
	constructor(props) {
		super(props);
	}
	
	render(){
		const style={
			height:100-this.props.height
		};
		return(
			<div className="header-intro" style={style}>
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