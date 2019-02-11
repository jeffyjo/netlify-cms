import { configure } from '@storybook/react'

const req = require.context('../src/components', true, /\stories\.js$/)

function loadStories() {
    require('../stories/index.js')
}

configure(loadStories, module)