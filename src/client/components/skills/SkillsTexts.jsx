import React from 'react';
import { SkillCard } from '../../utils/graphics';

export const DevIntroText = () => {
	return(
		<div className="developer-intro-text">
			Experienced both in backend and frontend development, 
			my <strong>engineering</strong> competencies make me capable of designing and 
			developing robust, efficient and scalable solutions.
		</div>
	)
};
export const DevIntroTitle = () => {
	return(
		<div>
			<div>A</div>
			<div>Developer</div>
			<div>First</div>
		</div>
	)
};

export const BEDevelopmentCard = () => {
	return(
		<SkillCard 
		title={<span>Back-end Development</span>} 
		paragraphText={<span>Designing and developing server side application. Behind the scenes of the user interface component</span>}
		/>
	)
};

export const FEDevelopmentCard = () => {
	return(
		<SkillCard 
		title={<span>Front-end Development</span>} 
		paragraphText={<span>Working on the user interface for creating beautiful things</span>}
		/>
	)
};

export const Devops = () => {
	return(
		<SkillCard 
		title={<span>Devops is a serious Matter</span>} 
		paragraphText={<span>Like a software engineer optimizes an algorithm, a DevOps engineer optimizes the software engineering process.</span>}
		/>
	)
};



