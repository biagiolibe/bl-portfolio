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
					let totalShifting = {
						x:Math.abs(element.endingPosition.x-element.startingPosition.x),
						y:Math.abs(element.endingPosition.y-element.startingPosition.y)
					}
					shouldChangeElements = [...shouldChangeElements,
						Object.assign({}, element, 
							{
								shouldMove:(element.movingFrom <= action.scrolled && action.scrolled < element.movingFrom+element.initialHeight)
							},
							{
								whileFixedTranslation:(element.movingFrom > action.scrolled)?element.startingPosition:((action.scrolled >= element.movingFrom+element.initialHeight)?element.endingPosition:null)
							},
							{
								translation:{
									x:element.startingPosition.x-((element.startingPosition.x<element.endingPosition.x?-1:1)*((totalShifting.x*percentScrolling)/100)),
									y:element.startingPosition.y-((element.startingPosition.y<element.endingPosition.y?-1:1)*((totalShifting.y*percentScrolling)/100))
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
						movingFrom:action.movingFrom,
						endingPosition:action.endingPosition,
						startingPosition:action.startingPosition,
						initialHeight:action.initialHeight,
						translation:action.startingPosition
					}
				]
			})
		default:
			return state;
		}
  }
  
  export default scrolling
  