import React, {Component} from 'react';
import { FloatingContainer } from '../styled';
import {Container, Row, Col} from 'react-bootstrap';
import {DevIntroText, DevIntroTitle, BEDevelopmentCard, FEDevelopmentCard, Devops} from './SkillsTexts'

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
				<Container>
				<Row>
					<Col md={4}>
					<FloatingContainer 
						identifier="big-title-skill"
						styleClass="big-title-center" 
						vertical={{from:0,to:120}}
						content={<DevIntroTitle />}
					></FloatingContainer>
					</Col>
				</Row>
				<Row>
					<Col md={{span:6, offset:5}}>
					<FloatingContainer 
						identifier="developer-intro"
						styleClass="developer-intro"
						vertical={{from:0, to:-30}} 
						content={<DevIntroText/>}
					></FloatingContainer>
					</Col>
					</Row>
				</Container>
				</div>
				
				<div className="full-height">
				<Container fluid>
					<Row>
						<Col md={{span:7, offset:5}}>
							<FloatingContainer 
								identifier="skills-background"
								styleClass="skills-background full-height"
								vertical={{from:0, to:20}} 
								startWhenVisible
								content=
								{
								<div>
									<BEDevelopmentCard />
									<FEDevelopmentCard />
									<Devops />
								</div>
								}
							></FloatingContainer>
						</Col>
					</Row>
				</Container>
				</div>
			</div>
			
		)
	}
}