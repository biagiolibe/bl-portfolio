/* State
{
	translatingOnScroll: [
		{
			elementId: id of the element
			absPosition: the offset position from top
			changeFrom: the position it should move from
			shouldMove: true/false
			lastTranslation: last different from 0 translation value 
			initialHeight: element height at the time of registering on store
		}
	],
	yTranslation: <integer>,
	prevYTranslaction: previous value of translaction
}
*/

const initialState = {
	translatingOnScroll:[],
	windowScroll:0,
	yTranslation:0, 
	prevYTranslation:0
}
const scrolling = (state = initialState, action) => {
	
	switch (action.type) {
		case 'SCROLL':
			let shouldChangeElements = [];
			state.translatingOnScroll.forEach(element => {
				shouldChangeElements = [...shouldChangeElements,
					Object.assign({}, element, 
						{
							shouldMove:(element.changeFrom <= action.scrolled && action.scrolled < element.changeFrom+element.initialHeight)
						},
						{
							whileFixedTranslation:(element.changeFrom > action.scrolled)?element.startYValue:((action.scrolled >= element.changeFrom+element.initialHeight)?element.endYValue:null)
						}
						)
				]
			});
			return{
				translatingOnScroll: shouldChangeElements,
				windowScroll: action.scrolled,
				yTranslation: action.normScrolled,
				prevYTranslation: state.yTranslation
			}
		case 'REGISTER':
			return Object.assign({},state,{
				translatingOnScroll: [
					...state.translatingOnScroll, 
					{
						elementId:action.elementId,
						absPosition:action.absPosition, 
						changeFrom:action.changeFrom,
						endYValue:action.endYValue,
						startYValue:action.startYValue,
						initialHeight:action.initialHeight
					}
				]
			})
		default:
			return state;
		}
  }
  
  export default scrolling
  