import React, {Component} from 'react';
import { FloatingContainer } from '../../redux/containers';

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
					<FloatingContainer content="A developer first"></FloatingContainer>
				</div>
				<div className="full-height">
					skills go here
				</div>
			</div>

		)
	}
}