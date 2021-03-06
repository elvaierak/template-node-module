const constants = [
  ['PM_YARN', 'yarn'],
  ['PM_NPM',  'npm'],
  ['TF_JEST', 'jest'],
  ['TF_NONE', 'none'],
]

constants.infect = function(configuration) {
  constants.forEach(([name, value]) => {
    configuration.prompts[name] = {
      type: 'list',
      message: 'Infection of the constant (Just skip).',
      choices: [value],
      default: value,
      store: true,
    }
  })
}

module.exports = constants
