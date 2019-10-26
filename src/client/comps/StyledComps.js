import styled from 'styled-components'
import styles from '../sass/app.scss';

//attrs method, together with a style object, is used for frequently changing styles

export const ScrollableDivSection = 
	styled.div.attrs(props => ({
		className:'section',
		style: {
			transform:props.hasToScroll && 'matrix(1, 0, 0, 1, 0,'+props.scroll/2+')'
			/*position: props.hasToScroll && 'fixed'*/
		}		
	  }))``

export const Keyword = 
	styled.span.attrs(props => ({
		style: {
			boxShadow: '1px 1px 12px -2px '+styles.bgcolor4,
			background: props.background,
			color:props.textColor
		},
	}))``

