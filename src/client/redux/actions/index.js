export const scroll = (winScroll,normScrolled) => ({
	type: 'SCROLL',
	scrolled: winScroll,
	normScrolled: normScrolled
  })


export const registerToStore = (elementId, absPosition, startTranslationPos, lastYTranslation) => ({
	type: 'REGISTER',
	elementId: elementId,
	absPosition: absPosition,
	changeFrom: startTranslationPos,
	lastYTranslation: lastYTranslation
})