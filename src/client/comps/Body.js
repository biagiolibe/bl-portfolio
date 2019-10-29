import React, {Component} from 'react';
import {} from 'reactstrap';

import BioSectionContainer from '../redux/containers/BioSectionContainer';
import SkillSectionContainer from '../redux/containers/SkillSectionContainer';
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
				<SkillSectionContainer />
			</div>
		)
	}
}