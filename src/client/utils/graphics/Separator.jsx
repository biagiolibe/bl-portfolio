import React from 'react'

const Separator = (props) => {
	return (
		<svg className="svg-separator" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<polyline points="5,1 10,5 15,1 20,5 25,1 30,5 35,1 40,5 45,1" stroke={props.color} strokeWidth="2" fill="none" />
		</svg>
	)
}

export default Separator;