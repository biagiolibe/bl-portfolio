import React, {Component} from 'react';
import HeadingText from './HeadingText';
import {ScrollableDivSection} from '../styled/StyledComps';

export default class Intro extends Component{
	constructor(props) {
		super(props);
		this.ref=React.createRef()
	}

	componentDidMount(){
		let boundingElement = this.ref.current.getBoundingClientRect();
		let offsetTop = boundingElement.top + (document.body.scrollTop || document.documentElement.scrollTop);
		
		//let isActive = this.ref.current ? this.ref.current.getBoundingClientRect().y<=0 && this.ref.current.getBoundingClientRect().y>-610 : false;
		this.props.registerToStore(1,offsetTop,offsetTop,{x:0,y:0}, {x:0,y:boundingElement.height},boundingElement.height);
	}
		
	render(){
		return(
			<ScrollableDivSection className="header-intro section" 
			ref={this.ref}
			shouldMove={this.props.shouldMove}
			yTranslation={this.props.yTranslation/2}
			>
				<HeadingText />
			</ScrollableDivSection>
		)
	}
}