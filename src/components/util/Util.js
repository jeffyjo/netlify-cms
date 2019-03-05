export const fromObjectToParams = queryObj => {
  return `?${queryObj.key}=${queryObj.value}`
}

// TODO: Update this to handle several params
export const fromParamsToObject = () => {
  let queryString = window.location.search

  if (queryString) {
    queryString = queryString.slice(queryString.indexOf('?') + 1)
    let queryObj = { ...queryString.split('=') }
    return {
      [Object.values(queryObj)[0]]: Object.values(queryObj)[1],
    }
  }

  return null
}
