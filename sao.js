const constants = require('./constants')

const [
  [, PM_YARN],
  [, PM_NPM],
  [, TF_JEST],
  [, TF_NONE],
] = constants

let configuration = {
  prompts: {
    packageManager: {
      type: 'list',
      message: 'Which package manager do you want to choose?',
      choices: [
        PM_YARN,
        PM_NPM,
      ]
    },
    testingFramework: {
      type: 'list',
      message: 'Which testing framework do you want to choose?',
      choices: [
        TF_NONE,
        TF_JEST,
      ]
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  post(context) {
    context.gitInit()

    if (context.answers.packageManager === PM_YARN) {
      context.yarnInstall()
    } else {
      context.npmInstall()
    }
  }
}

// Constants are infected here, for the convenience of
// the writing templates
constants.infect(configuration)

module.exports = configuration
