/* State
{
	translatingOnScroll: [
		{
			elementId: id of the element
			absPosition: the offset position from top
			changeFrom: the position it should move from
			shouldMove: true/false
			lastTranslation: last different from 0 translation value 
		}
	],
	yTranslation: <integer>,
	prevYTranslaction: previous value of translaction
}
*/

const initialState = {
	translatingOnScroll:[],
	yTranslation:0, 
	prevYTranslation:0
}
const scrolling = (state = initialState, action) => {
	
	switch (action.type) {
		case 'SCROLL':
			console.log('state on scrolling -> ',state);
			let shouldChangeElements = [];
			state.translatingOnScroll.forEach(element => {
				shouldChangeElements = [...shouldChangeElements,
					Object.assign({}, element, 
						{shouldMove:(element.changeFrom <= action.scrolled)},
						{lastYTranslation:(element.changeFrom <= action.scrolled)?state.yTranslation:element.lastYTranslation}
						)
				]
			});
			return{
				translatingOnScroll: shouldChangeElements,
				yTranslation: action.normScrolled,
				prevYTranslaction: state.yTranslation
			}
		case 'REGISTER':
			return Object.assign({},state,{
				translatingOnScroll: [
					...state.translatingOnScroll, 
					{elementId:action.elementId,absPosition:action.absPosition, changeFrom:action.changeFrom,lastYTranslation:action.lastYTranslation}
				]
			})
		default:
			return state;
		}
  }
  
  export default scrolling
  