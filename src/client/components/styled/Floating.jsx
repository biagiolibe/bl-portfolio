import React, {PureComponent} from 'react';
import {FloatingTitle} from '../styled/StyledComps';

export default class Floating extends PureComponent{
	constructor(props) {
		super(props);
		this.ref=React.createRef()
	}

	componentDidMount(){
		let boundingElement = this.ref.current.getBoundingClientRect();
		let offsetTop = boundingElement.top + (document.body.scrollTop || document.documentElement.scrollTop);
		
		//let isActive = this.ref.current ? this.ref.current.getBoundingClientRect().y<=0 && this.ref.current.getBoundingClientRect().y>-610 : false;
		this.props.registerToStore(21,offsetTop,offsetTop,{x:0,y:0}, {x:0,y:boundingElement.height/2},boundingElement.height);
	}
	
	render(){
		return(
			<FloatingTitle
				ref={this.ref}
				position={this.props.translation}
				className="big-title-center"
			>
				{this.props.content}
			</FloatingTitle>
		)
	}
}