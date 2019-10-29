import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HeadingText} from './HeadingText';
import {ScrollableDivSection} from './StyledComps';
import {Logo} from './Logo';

export class HeaderSection extends Component{
	constructor(props) {
		super(props);
		this.ref=React.createRef()
	}

	componentDidMount(){
		this.ref=React.createRef();
	}
		
	render(){
		let animationActive = this.ref.current ? this.ref.current.getBoundingClientRect().y<=0: false;
		//console.log('header active -> ',animationActive);
		return(
			<ScrollableDivSection className="header-intro section" 
			ref={this.ref}
			hasToScroll={animationActive}
			scroll={(-this.props.height)}
			>
				{/*
				<Navbar color="inverse" light expand="md" className="header-nav">
					<NavbarBrand><Logo/></NavbarBrand>
				</Navbar>
				*/}
				<HeadingText />
			</ScrollableDivSection>
		)
	}
}