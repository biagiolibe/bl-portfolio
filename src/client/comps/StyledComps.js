import styled from 'styled-components'



export const ScrollableDivSection = 
	styled.div.attrs(props => ({
		style: {
			transform:props.hasToScroll && 'matrix(1, 0, 0, 1, 0,'+props.scroll/2+')'
			/*position: props.hasToScroll && 'fixed'*/
		},
	  }))``
