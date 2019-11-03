export const scroll = (winScroll,normScrolled, windowHeight, pageHeight) => ({
	type: 'SCROLL',
	scrolled: winScroll,
	normScrolled: normScrolled,
	windowHeight: windowHeight,
	pageHeight: pageHeight
  })


export const registerToStore = (elementId, absPosition, movingFrom, startingPosition,endingPosition, initialHeight) => ({
	type: 'REGISTER',
	elementId: elementId,
	absPosition: absPosition,
	movingFrom: movingFrom,
	startingPosition: startingPosition,
	endingPosition:endingPosition,
	initialHeight: initialHeight
})