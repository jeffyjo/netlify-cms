const fs = require('fs')
const { ATOM_CONFIG, ROOT_CONFIG } = require('./config.build')

// console.log(ATOM_CONFIG)
// console.log('______________________')
// console.log(ROOT_CONFIG)

/**
 * Create files for root of style
 */
let setRoot = () => {
  if(!fs.existsSync(`${ROOT_CONFIG.src}`)) {
    console.log('Creating root folder...')
    fs.mkdirSync(`${ROOT_CONFIG.src}`)
    
  }
  if(!fs.existsSync(`${ROOT_CONFIG.src}/${ROOT_CONFIG.styles}`)) {
    console.log('Creating styles folder...')
    fs.mkdirSync(`${ROOT_CONFIG.src}/${ROOT_CONFIG.styles}`)
  }
  if(!fs.existsSync(`${ROOT_CONFIG.src}/${ROOT_CONFIG.styles}/${ROOT_CONFIG.filename}`)) {
    console.log('Creating styles file...')
    fs.writeFileSync(`${ROOT_CONFIG.src}/${ROOT_CONFIG.styles}/${ROOT_CONFIG.filename}`, '')
      
  }
}

/**
 * Create subfolders for atomic style
 */
let setSubfolders = () => {
  Object.entries(ATOM_CONFIG).map( ([entry, {path, filename}]) => {
    if(!fs.existsSync(`${ROOT_CONFIG.src}/${ROOT_CONFIG.styles}/${path}`)) {
        fs.mkdirSync(`${ROOT_CONFIG.src}/${ROOT_CONFIG.styles}/${path}`)
    }
    if(!fs.existsSync(`${ROOT_CONFIG.src}/${ROOT_CONFIG.styles}/${path}/${filename}`)) {
        fs.writeFileSync(`${ROOT_CONFIG.src}/${ROOT_CONFIG.styles}/${path}/${filename}`, '')
    }
    let importStmt = `@import "${path}/${filename}";\n`
    fs.appendFileSync(`${ROOT_CONFIG.src}/${ROOT_CONFIG.styles}/${ROOT_CONFIG.filename}`, importStmt)
  })
}


// Main function
;(() => {
  console.log('Getting started with setup...')
  setRoot()
  console.log('Setup styles root...')
  setSubfolders()
  console.log('Creating subfolders...')
})()