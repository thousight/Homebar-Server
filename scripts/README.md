# Scripts

- **`postinstall-script.js`** gets called after every `yarn install`, and it creates a production build if it is currently in production environment

- **`preinstall-script.js`** gets called before every `yarn install`, and it checks the script and prevents the usage of `npm`
