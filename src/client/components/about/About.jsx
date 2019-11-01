import React, {PureComponent} from 'react';
import {ScrollableDivSection, Keyword} from '../styled/StyledComps';
import styles from '../../sass/app.scss';

export class About extends PureComponent{
	constructor(props) {
		super(props);
		this.ref=React.createRef()
	}

	componentDidMount(){
		let boundingElement = this.ref.current.getBoundingClientRect();
		let offsetTop = boundingElement.top + (document.body.scrollTop || document.documentElement.scrollTop);
		
		//let isActive = this.ref.current ? this.ref.current.getBoundingClientRect().y<=0 && this.ref.current.getBoundingClientRect().y>-610 : false;
		this.props.registerToStore(2,offsetTop,offsetTop,0, boundingElement.height,boundingElement.height);
	}
	
	render(){
		return(
			<ScrollableDivSection className="bio-section" 
			ref={this.ref}
			shouldMove={this.props.shouldMove}
			yTranslation={this.props.yTranslation/2}
			>
				<div className="section-title">About me</div>
				<div className="padding">
					<div className="aboutme-content-text">
						<div>
							I have a strong motivation, a high enthusiasm and a great passion for everything I do, so issues become <Keyword background={styles.bgcolorWhite} textColor={styles.fontcolor1}>“challenges”</Keyword>.
						</div>
						<div>
							A <Keyword background={styles.bgcolor4} textColor={styles.fontcolor2}>“steady”</Keyword> will in pursuing my goals is my strenght. Aiming always high is my life way.
						</div>
					</div>
				</div>
			</ScrollableDivSection>
		)
	}
}