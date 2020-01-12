import React from 'react'
import Separator from "./Separator";
import Polyline from './Polyline';
import styles from '../../sass/app.scss'

const SkillCard = (props) => {
	return(
		<div className="development-skill-card">
			<div className="card-animate">
				<div className="title">{props.title}</div>
			</div>
			<div className="card-animated">
				<Separator color={styles.bgcolor2}/>
				<div className="paragraph">
					<div className=" padding">
						{props.paragraphText}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SkillCard;