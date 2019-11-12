import React from 'react'
import Separator from "./Separator";
import Polyline from './Polyline';

const SkillCard = (props) => {
	return(
		<div className="development-skill-card">
			<div className="stroke-animate-show card-animate">
				<div className="title">{props.title}</div>
			</div>
			<Polyline/>
			<div className="paragraph stroke-animate">
				<div className=" padding">
					{props.paragraphText}
				</div>
			</div>
		</div>
	)
}

export default SkillCard;