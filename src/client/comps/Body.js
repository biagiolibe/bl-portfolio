import React, {Component} from 'react';
import {} from 'reactstrap';

import {BioSection} from './BioSection';
import {SkillSection} from './SkillSection';

export default class Body extends Component{
	constructor(props) {
		super(props);
		this.state={};
	}

	render(){
		return(
			<div className = "body-content">
				<BioSection />
				<SkillSection />
			</div>
		)
	}
}