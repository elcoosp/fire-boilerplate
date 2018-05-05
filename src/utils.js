const shellJs = require('shelljs')
const { constantCase } = require('change-case')

const compose = (...fns) => ({
  against: initAcc => fns.reduce((acc, f) => f(initAcc), initAcc)
})

const returnArg = sideEffectsFunc => arg => {
  sideEffectsFunc(arg)
  return arg
}

const shellExec = command => ({
  msg: (msg = false) => {
    msg && console.log(msg)
    shellJs.exec(command, { silent: true })
  }
})

const toFormattedRoutes = routes =>
  routes
    .split(' ')
    .filter(x => x.trim() !== '')
    .reduce((acc, route) => {
      acc[route] = {
        constantFormat: constantCase(route),
        pathFormat: '/' + route.toLowerCase()
      }
      return acc
    }, {})

module.exports = {
  compose,
  returnArg,
  toFormattedRoutes,
  shellExec
}
