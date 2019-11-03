export const scroll = (winScroll,normScrolled, windowHeight, pageHeight) => ({
	type: 'SCROLL',
	scrolled: winScroll,
	normScrolled: normScrolled,
	windowHeight: windowHeight,
	pageHeight: pageHeight
  })


export const registerToStore = (elementId, absPosition, startTranslationPos, startYValue,endYValue, initialHeight) => ({
	type: 'REGISTER',
	elementId: elementId,
	absPosition: absPosition,
	changeFrom: startTranslationPos,
	startYValue: startYValue,
	endYValue:endYValue,
	initialHeight: initialHeight
})