const initialState = {
	translatingOnScroll:[],yTranslation:0, prevYTranslation:0	
}

const registerComponent = (state = initialState, action) => {
	switch (action.type) {
		case "REGISTER":
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

export default registerComponent