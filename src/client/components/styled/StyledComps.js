import styled from 'styled-components'
import styles from '../../sass/app.scss';

//attrs method, together with a style object, is used for frequently changing styles

export const ScrollableDivSection = 
	styled.div.attrs(props => ({
		className:'section',
		style: {
			transform:'translate3d(0px,'+props.yTranslation+'px, 0px)'
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

export const FloatingTitle = 
styled.div.attrs(props => ({
	style: {
		transform:props.position &&'translate3d('+props.position.x+'px,'+props.position.y+'px, 0px)'
	}
}))``