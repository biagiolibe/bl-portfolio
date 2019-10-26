import styled from 'styled-components'
import styles from '../sass/app.scss';

export const ScrollableDivSection = 
	styled.div.attrs(props => ({
		style: {
			transform:props.hasToScroll && 'matrix(1, 0, 0, 1, 0,'+props.scroll/2+')'
			/*position: props.hasToScroll && 'fixed'*/
		},
	  }))``

export const Keyword = 
	styled.span.attrs(props => ({
		style: {
			boxShadow: '1px 1px 12px -2px '+styles.bgcolor5,
			background: props.background,
			color:props.textColor
		},
	}))``