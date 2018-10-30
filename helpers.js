export let preventDefault = e => e.preventDefault()
export let compose = (...fns) =>
  fns.reduceRight(
    (prevFn, nextFn) => (...args) =>
      nextFn(prevFn(...args)),
    value => value
  )
