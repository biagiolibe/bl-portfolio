export const scroll = (winScroll,normScrolled) => ({
	type: 'SCROLL',
	scrolled: winScroll,
	normScrolled: normScrolled
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