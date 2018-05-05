const shellJs = require('shelljs')

const compose = (...fns) => ({
  against: initAcc => fns.reduce((acc, f) => f(initAcc), initAcc)
})

const returnArg = sideEffectsFunc => arg => {
  sideEffectsFunc(arg)
  return arg
}

const shell = command => ({
  msg: msg => {
    console.log(msg)
    shellJs.exec(command, { silent: true })
  }
})

module.exports = {
  compose,
  returnArg,
  shell
}
