import React, {Component} from 'react';
import {ScrollableDivSection, Keyword} from './StyledComps';
import styles from '../sass/app.scss';

export class BioSection extends Component{
	constructor(props) {
		super(props);
		this.ref=React.createRef()
	}

	componentDidMount(){
		this.ref=React.createRef();
	}
	
	render(){
		let isInTop = this.ref.current ? this.ref.current.getBoundingClientRect().y<=0: false;
		return(
			<ScrollableDivSection className="bio-section section" 
			ref={this.ref}
			hasToScroll={isInTop}
			scroll={this.props.height}
			>
				<div className="section-title">About me</div>
				<div className="padding">
					<div className="aboutme-content-text">
						<div>
							I have a strong motivation, a high enthusiasm and a great passion for everything I do, so issues become <Keyword background={styles.bgcolorWhite} textColor={styles.fontcolor1}>“challenges”</Keyword>.
						</div>
						<div>
							A <Keyword background={styles.bgcolor5} textColor={styles.fontcolor2}>“steady”</Keyword> will in pursuing my goals is my strenght. Aiming always high is my life way.
						</div>
					</div>
				</div>
			</ScrollableDivSection>
		)
	}
}