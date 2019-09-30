const scrollTo = (state = null, action) => {
	switch (action.type) {
	  case 'SCROLL':
			return action.toHeight*100  
	  default:
			return state;
		}
  }
  
  export default scrollTo
  