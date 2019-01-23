[![Build Status](https://travis-ci.org/thousight/Express-TS-Starter.svg?branch=master)](https://travis-ci.org/thousight/Express-TS-Starter)

# Express-TS-Starter

A minimal express server starter with TypeScript

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

### Other Useful Commands

- **`yarn build`** creates a production build of the server code in the build folder, which is ignored by git, in the project root.

- **`yarn start`** runs the production build in build folder, will error out if the build folder doesn't exist.

- **`yarn clean`** removes yarn caches and output folders, then re-installs node_modules.

- **`yarn clean:dev`** does the job of `yarn clean` but starts development server immediately after.

- **`yarn test`** runs a jest unit test.

- **`yarn test:watch`** runs jest in watch mode.

- **`yarn test:ci`** runs jest in CI mode, most likely gets called in the CI scripts.

- **`yarn test:coverage`** runs jest and has it return coverage report, then opens the generated coverage report html on the browser.

- **`yarn tslint`** runs the linter on all typescript code.

- **`yarn lint-staged`** runs the linter on all staged files in git, this command is most likely called by husky before creating a git commit.

- **`yarn semantic-release`** runs the semantic-release package to bump package.json version and create git release tag. This is most likely called by Travis CI, but can be ran locally to do a dry-run without actually publishing a release.

### Packages

Explanations for why they exist in this project. (Ignoring @types/\* since they are just type definitions for the corresponding library)

#### Dependencies

- **[body-parser](https://github.com/expressjs/body-parser):** express middleware that parses `req.body` into a trustable JSON before getting to the controllers.
- **[compression](https://github.com/expressjs/compression):** express middleware that compresses response bodies for all requests.
- **[cors](https://github.com/expressjs/cors):** express middleware that adds CORS control on requests and responses, allowing developers to restrict origins, types, and etc. of all the calls coming in and out.
- **[dotenv](https://github.com/motdotla/dotenv):** a library that puts all config variables defined in `.env` file into `process.env`.
- **[express](https://expressjs.com/):** popular node.js server framework.
- **[moment](https://momentjs.com):** popular date time utility library.
- **[morgan](https://github.com/expressjs/morgan):** express middleware that logs the status for all requests.
- **[winston](https://github.com/winstonjs/winston):** popular logging library that is highly customizable.

#### Dev Dependencies

- **[@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer):** semantic-release plugin that analyzes commit messages to determine if a version bump is required.
- **[@semantic-release/git](https://github.com/semantic-release/git):** semantic-release plugin that pushes git version tags and files that are generated for release to git remote.
- **[@semantic-release/npm](https://github.com/semantic-release/npm):** semantic-release plugin that updates the package.json version and publish package to npm (optional, so disabled for this starter).
- **[@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator):** semantic-release plugin that generates release notes based on commit messages.
- **[conventional-changelog-express](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-express):** a library that multiple semantic-release plugins rely on.
- **[husky](https://github.com/typicode/husky):** git hooks configuration to call scripts before commit, push, and more.
- **[jest](https://jestjs.io):** popular testing framework.
- **[lint-staged](https://github.com/okonet/lint-staged):** run linter to format staged files in git, used with husky to lint staged files before a commit.
- **[nodemon](https://nodemon.io/):** listens to file saves and live reloads server during development.
- **[prettier](https://prettier.io/):** code formatter that makes code more readable.
- **[semantic-release](https://github.com/semantic-release/semantic-release):** automatic release version management.
- **[ts-jest](https://github.com/kulshekhar/ts-jest):** TypeScript preprocessor for Jest.
- **[ts-node](https://github.com/TypeStrong/ts-node):** node.js that works with TypeScript so that no need to do `tsc` on every file save during development.
- **[tslint](https://palantir.github.io/tslint/):** TypeScript linter.
- **[tslint-config-prettier](https://github.com/prettier/tslint-config-prettier):** TSLint plugin that works with Prettier to remove conflicts.
- **[typescript](https://www.typescriptlang.org/):** A JavaScript that enforces typing.
