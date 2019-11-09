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
		const windowHeight = window.innerHeight || window.screen.height;
		const windowWidth = window.innerWidth || window.screen.width;
		let movingFrom = (offsetTop-(offsetTop%windowHeight)) - (this.props.startWhenVisible?windowHeight:0);
		let startingPosition = {
			x:this.props.horizontal?(this.props.horizontal.from*windowWidth)/100:0,
			y:this.props.vertical?(this.props.vertical.from*windowHeight)/100:0
		}
		let endingPosition = {
			x:this.props.horizontal?(this.props.horizontal.to*windowWidth)/100:0,
			y:this.props.vertical?(this.props.vertical.to*windowHeight)/100:0
		}
		
		//let isActive = this.ref.current ? this.ref.current.getBoundingClientRect().y<=0 && this.ref.current.getBoundingClientRect().y>-610 : false;
		this.props.registerToStore(this.props.identifier,offsetTop,movingFrom,startingPosition, endingPosition,windowHeight);
	}
	
	render(){
		return(
			<FloatingTitle
				ref={this.ref}
				position={this.props.translation}
				className={this.props.styleClass}
			>
				{this.props.content}
			</FloatingTitle>
		)
	}
}