const scrolling = (state = null, action) => {
	switch (action.type) {
	  case 'SCROLL':
			return {
				scrolled:action.scrolled,
				height: action.height
			}  
	  default:
			return {scrolled:0,
				height:"100vh"};
		}
  }
  
  export default scrolling
  