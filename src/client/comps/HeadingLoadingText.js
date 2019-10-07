import React, {Component} from 'react';
//import Logo from '../../../public/bl-animation.gif';
import 'rc-texty/assets/index.css';

export class HeadingLoadingText extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.toggleLoadingComplete();
	}

	toggleLoadingComplete(){
		setTimeout(()=>{
			this.props.onLoadingComplete();
		}, 6000);
	}

	render(){
		return(
			<div className="header-wide-loading-content animate-translate-up">
				<img src="../../../public/bl-animation.gif" className="heading-loading-img" alt="Biagio Liberto" />
			</div>
		)
	}
}