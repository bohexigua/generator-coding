import chalk from 'chalk'

export const hint = {};

hint.success = (tips = '', str = '') => {
  console.log(`${ chalk.green(tips) } ${str}`)
}

hint.warn = (tips = '', str = '') => {
  console.log(`${ chalk.yellow(tips) } ${str}`)
}