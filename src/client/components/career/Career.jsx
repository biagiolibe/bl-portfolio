import React, {Component} from 'react';
import { FloatingContainer } from '../styled';
import {Container, Row, Col} from 'react-bootstrap';

export default class Career extends Component{
	constructor(props){
		super(props);
		this.ref=React.createRef()
	}

	componentDidMount(){
		this.ref=React.createRef();
	}
	
	render(){
		return(
			
			<div className="career-section full-height">
				
			</div>
			
		)
	}
}