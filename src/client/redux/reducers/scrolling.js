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
	windowScroll,
	windowHeight,
	yTranslation: <integer>,
	prevYTranslaction: previous value of translaction
}
*/

const initialState = {
	translatingOnScroll:[],
	windowScroll:0,
	windowHeight:NaN,
	yTranslation:0, 
	prevYTranslation:0
}
const scrolling = (state = initialState, action) => {
	
	switch (action.type) {
		case 'SCROLL':
			if(Math.floor(action.normScrolled)>0 && action.scrolled<(action.pageHeight-action.windowHeight)){//I did not achive the end or start of page 
				let shouldChangeElements = [];
				let percentScrolling=(action.normScrolled*100)/state.windowHeight;
				state.translatingOnScroll.forEach(element => {
					let elementAbsPos = {
						x:element.endYValue.x-element.startYValue.x,
						y:element.endYValue.y-element.startYValue.y
					}
					shouldChangeElements = [...shouldChangeElements,
						Object.assign({}, element, 
							{
								shouldMove:(element.changeFrom <= action.scrolled && action.scrolled < element.changeFrom+element.initialHeight)
							},
							{
								whileFixedTranslation:(element.changeFrom > action.scrolled)?element.startYValue:((action.scrolled >= element.changeFrom+element.initialHeight)?element.endYValue:null)
							},
							{
								translation:{
									x:(elementAbsPos.x*percentScrolling)/100,
									y:(elementAbsPos.y*percentScrolling)/100
								}
							}
							)
					]
				});
				return{
					translatingOnScroll: shouldChangeElements,
					windowScroll: action.scrolled,
					windowHeight: action.windowHeight,
					yTranslation: action.normScrolled,
					prevYTranslation: state.yTranslation
				}
			}
			return state;
			
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
  