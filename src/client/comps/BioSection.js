import React, {Component} from 'react';
import {ScrollableDivSection} from './StyledComps';

export class BioSection extends Component{
	constructor(props) {
		super(props);
		this.ref=React.createRef()
	}

	componentDidMount(){
		this.ref=React.createRef();
	}
	
	render(){
		let isInTop = this.ref.current ? this.ref.current.getBoundingClientRect().y<=0: false;
		console.log('bio top -> ',isInTop);
		return(
			<ScrollableDivSection className="bio-section" 
			ref={this.ref}
			hasToScroll={isInTop}
			scroll={this.props.height}
			>
				<h3>Bio title</h3>
			</ScrollableDivSection>
		)
	}
}