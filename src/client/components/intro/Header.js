import React, {Component} from 'react';
import HeadingLoadingText from './HeadingLoadingText';
import {IntroContainer} from '../../redux/containers';

export default class Header extends Component{
	constructor(props) {
		super(props);
		this.state={isLoadingTextCompleted: false};
	}
	
	toggleLoadingTextCompleted=()=>{
		this.setState({
			isLoadingTextCompleted: true
		})
	}

	render(){
		return(
			<div className = "header-wide">
				<HeadingLoadingText onLoadingComplete={this.toggleLoadingTextCompleted}/>
				<IntroContainer />
			</div>
		)
	}
}