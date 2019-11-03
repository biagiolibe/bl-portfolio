import React, {Component} from 'react';
import { FloatingContainer } from '../styled';

export default class Skills extends Component{
	constructor(props){
		super(props);
		this.ref=React.createRef()
	}

	componentDidMount(){
		this.ref=React.createRef();
	}
	
	render(){
		return(
			<div className="skill-section">
				<div className="preamble full-height">
					<FloatingContainer 
						identifier="big-title-skill"
						styleClass="big-title-center" 
						vertical={{from:0,to:50}}
						content="A developer first"
					></FloatingContainer>
					<FloatingContainer 
						identifier="lang-skill-card"
						styleClass="lang-skill-card"
						vertical={{from:0, to:100}} 
						horizontal={{from:50, to:0}}
						content="skill card"
					></FloatingContainer>
					<FloatingContainer 
						identifier="skills-background"
						styleClass="skills-background full-height full-width"
						vertical={{from:100, to:120}} 
						horizontal={{from:100, to:25}}
						content=""
					></FloatingContainer>
					
				</div>
				<div className="full-height">
					
				</div>
			</div>

		)
	}
}