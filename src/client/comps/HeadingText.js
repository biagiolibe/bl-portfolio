import React, {Component} from 'react';
import ContentLoading from './ContentLoading';

export default class HeadingText extends Component{
	constructor(props){
		super(props);
		this.state={
			username: "", 
			title: "",
			subtitle: ""
		}
	}

	componentDidMount() {
		fetch('/api/getUserData')
		  	.then(res => res.json())
		  	.then(user => this.setState({ 
			  	username: user.username, 
				title: user.title,
				subtitle: user.subtitle
			}));
	}

	render(){
		const headerData = { 
			name: this.state.username,
			title: this.state.title,
			subtitle: this.state.subtitle
		};
		return(
			<div className="header-wide-content">
				<div className="header-wide-content-title">
					{headerData.title ? <h1>{`${headerData.title}`}</h1> : <ContentLoading/>}
				</div>
				<div className="header-wide-content-text">
					{headerData.subtitle ? <h4>{`${headerData.subtitle}`}</h4>: <ContentLoading/>}
				</div>
			</div>
		)
	}
}