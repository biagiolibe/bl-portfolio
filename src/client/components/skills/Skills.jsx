import React, {Component} from 'react';
import { FloatingTitle } from '../styled/StyledComps';

export default class Skills extends Component{
	constructor(props){
		super(props);
		this.ref=React.createRef()
	}

	componentDidMount(){
		this.ref=React.createRef();
	}
	
	render(){
		let isFloating = this.ref.current ? this.ref.current.getBoundingClientRect().y<=0: false;
		//console.log('isFloating -> ',isFloating);
		return(
			<div className="skill-section">
				<div className="preamble full-height">
					<FloatingTitle
						ref={this.ref}
						scroll={this.props.height}
						isFloating={isFloating} 
						className="big-title-center">A developer first</FloatingTitle>
				</div>
				<div className="full-height">
					skills go here
				</div>
			</div>

		)
	}
}