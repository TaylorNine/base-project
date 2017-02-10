# Base Project

> Say something...

Clone this repo, delete the `.git` directory and customize to your heart's content!

## Overview

- `/frontend` contains a basic React + Redux setup built using WebPack.
- `/server` is a basic express app using the pug template library.
- `/lib` is for common code across frontend/backend.
- `/test` has test configuration for Mocha/Chai test suite.


## Setup

```bash
# Install NVM, then:
nvm install
nvm use

# Install deps
npm install

# Run
npm start # or npm run watch
```


## Development

Run the app with `npm start` or watch for changes using `npm run watch`.

Build frontend assets into the `/public` directory using `npm run build-assets`.

Run tests with `npm test` or `npm run watch-test`.

Configuration is done using the `config` library. Check out the defaults in `config/default.js` and override by setting environment variables (see `config/custom-environment-variables.js` for a list of what environment variable maps to what config value).


## Credits

Created by [Dana Woodman](http://danawoodman.com).

Copyright &copy; Dana Woodman 2017. Released under an MIT licence.
