[![Build Status](https://travis-ci.com/thousight/Homebar-Server.svg?branch=master)](https://travis-ci.com/thousight/Homebar-Server)

# Homebar-Server

Homebar app server with express, Apollo GraphQL, and TypeScript

### Pre-Requisites

1. Make sure you have [node.js](https://nodejs.org/en/) installed locally
2. Once you have node.js installed, add yarn to your global local directories with this command in terminal:

```
npm i -g yarn
```

### Getting Started

1. After you cloned this repo down to your local machine, start with installing dependencies by:

```
yarn install
```

2. To start developing locally, use the command below:

```
yarn start:dev
```

### Useful Commands

- **`yarn build`** creates a production build of the server code in the build folder, which is ignored by git, in the project root.

- **`yarn start`** runs the production build in build folder, will error out if the build folder doesn't exist.

- **`yarn start:dev`** runs the development server and will live reload the server on ts file saves.

- **`yarn clean`** removes yarn caches and output folders, then re-installs node_modules.

- **`yarn clean:dev`** does the job of `yarn clean` but starts development server immediately after.

- **`yarn test`** runs a jest unit test.

- **`yarn test:watch`** runs jest in watch mode.

- **`yarn test:ci`** runs jest in CI mode, most likely gets called in the CI scripts.

- **`yarn test:coverage`** runs jest and has it return coverage report, then opens the generated coverage report html on the browser.

- **`yarn tslint`** runs the linter on all typescript code.

- **`yarn lint-staged`** runs the linter on all staged files in git, this command is most likely called by husky before creating a git commit.

- **`yarn semantic-release`** runs the semantic-release package to bump package.json version and create git release tag. This is most likely called by Travis CI, but can be ran locally to do a dry-run without actually publishing a release.
