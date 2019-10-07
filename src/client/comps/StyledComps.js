import styled from 'styled-components'

export const ScrollableDivSection = 
	styled.div.attrs(props => ({
		style: {
			height:props.hasToScroll && 100-props.scroll+'vh',
			position: props.hasToScroll && 'fixed'
		},
	  }))``
