import {
	BASE_CLASS_IMAGE_POSITION,
	BASE_CLASS_WIDTH
} from './const'

export const getImagePositionClass = imagePosition => {
	return BASE_CLASS_IMAGE_POSITION.concat(imagePosition)
}

export const getBlockWidth = width => {
	if(!width) {
		return
	}

	let widthClasses = Object.entries(width).map(entry => {
		let device = getDevice(entry[0])
		let widthClass = BASE_CLASS_WIDTH.concat(entry[1]).concat(device)
		return widthClass
	})
	return widthClasses
}

/**
 * Private method
 */
const getDevice = device => {
	switch(device) {
		case 'tabletWidth':
			return '-md'
		case 'desktopWidth':
			return '-lg'
		default:
			return ''
	}
}