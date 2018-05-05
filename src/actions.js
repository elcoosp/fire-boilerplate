const { returnArg, shell } = require('./utils')

const createReactApp = returnArg(resp =>
  shell(`create-react-app ${resp.projectName}`).msg('Creating react app')
)

module.exports = [createReactApp]
