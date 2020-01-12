import React from 'react'

const Polyline = () => {
	return (
		<svg className="svg-polyline" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<polyline id="polyline" points="1,0 5,5 0,10" stroke="#1c1b20" strokeWidth="2" fill="none" />
			</defs>
			<use href="#polyline" x="0" y="0"/>
			<use href="#polyline" x="0" y="10"/>
			<use href="#polyline" x="0" y="20"/>
			<use href="#polyline" x="0" y="30"/>
			<use href="#polyline" x="0" y="40"/>
			<use href="#polyline" x="0" y="50"/>
			<use href="#polyline" x="0" y="60"/>
			<use href="#polyline" x="0" y="70"/>
			<use href="#polyline" x="0" y="80"/>
			<use href="#polyline" x="0" y="90"/>
			<use href="#polyline" x="0" y="100"/>
		</svg>
	)
}

export default Polyline;