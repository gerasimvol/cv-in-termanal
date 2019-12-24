'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double'
}

// Text + chalk definitions
const data = {
  name: chalk.yellow.bold('            Vladimir Gerasimenko / gerasim_vol'),
  work: chalk.yellow('Frontend engineer at Vintage Web Production'),
  twitter: chalk.gray('twitter.com/') + chalk.blue('gerasim_vol'),
  instagram: chalk.gray('instagram.com/') + chalk.red('gerasim_vol'),
  github: chalk.gray('github.com/') + chalk.green('gerasimvol'),
  linkedin: chalk.gray('linkedin.com/in/') + chalk.magenta('gerasimenkovladimir'),
  web: chalk.cyan('gerasimvol') + chalk.gray('.github.io'),
  share: chalk.yellow('npx gerasim_vol'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelInstagram: chalk.white.bold('    Instagram:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('    LinkedIn:'),
  labelWeb: chalk.white.bold('    Web:'),
  labelShare: chalk.white.bold('    Share:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const instaing = `${data.labelInstagram}  ${data.instagram}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const sharing = `${data.labelShare}  ${data.share}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + newline +// data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               instaing + newline + // data.labelInstagram + data.instagram
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline +// data.labelWeb + data.web
               sharing // data.labelShare + data.share

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.yellow(boxen(output, options)))
