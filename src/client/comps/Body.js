import React, {Component} from 'react';
import {} from 'reactstrap';

import BioSectionContainer from '../redux/containers/BioSectionContainer';
import {SkillSection} from './SkillSection';

export default class Body extends Component{
	constructor(props) {
		super(props);
		this.state={};
	}

	render(){
		return(
			<div className = "body-content">
				<BioSectionContainer />
				<SkillSection />
			</div>
		)
	}
}