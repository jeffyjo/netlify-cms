
const ROOT_CONFIG = {
	src: `${__dirname}/../src/`,
	styles: 'styles',
	filename: 'style.scss'
}

const ATOM_CONFIG = {
	settings: {
		path: '1-settings',
		filename: 'settings.scss'
	},
	tools: {
		path: '2-tools',
		filename: 'tools.scss'
	},
	generic: {
		path: '3-generic',
		filename: 'generic.scss'
	},
	elements: {
		path: '4-elements',
		filename: 'elements.scss'
	},
	atoms: {
			path: '5-atoms',
			filename: 'atoms.scss'
	},
	molecules: {
			path: '6-molecules',
			filename: 'molecules.scss'
	},
	organisms: {
			path: '7-organisms',
			filename: 'organisms.scss'
	},
	pages: {
			path: '8-pages',
			filename: 'pages.scss'
	}
}

module.exports = {
	ROOT_CONFIG,
	ATOM_CONFIG
}