var execSync = require('child_process').execSync

if (process.env.NODE_ENV === 'production') {
  console.log('Run unit tests')
  execSync('yarn test', { stdio: [0, 1, 2] })

  console.log('Build server code')
  execSync('yarn build', { stdio: [0, 1, 2] })

  console.log('Create release')
  execSync('yarn semantic-release', { stdio: [0, 1, 2] })
}
