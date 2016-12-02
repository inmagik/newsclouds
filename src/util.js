const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export const formatDate = date => {
  const [ d, m, y ] = [ date.format('D'), date.format('MMMM'), date.format('YYYY') ]
  return `${d} ${capitalize(m)} ${y}`
}

export const makeCancelable = (promise) => {
  let hasCanceled_ = false

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then((val) =>
      hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
    )
    promise.catch((error) =>
      hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    )
  })

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true
    },
  }
}
