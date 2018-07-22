# Description

This is a POC of a store front using ReactJS. It has 4 views and will support a user system. Views:
- Home Page
- Product Listing Page
- Product Page
- Checkout Page

# Get started

## Development mode
To launch this project in development mode you'll need to run:
`npm start`

## Start json server
To launch this project's backend you'll need to run:
`npm run start-json-server`

## Production mode
To deploy this project to production you'll need to:
`npm build`

# Setup
This project uses the following tools for development and build for production.

- [Webpack](https://webpack.js.org/) and [webpack-dev-server](https://github.com/webpack/webpack-dev-server) for bundling and providing a development static server
- Hot module replacement for faster development and debugging
- Ecmascript latest
- [Babel](https://babeljs.io/) along with [babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) for supporting class properties
- [Jest](https://facebook.github.io/jest/) along with [enzyme](https://github.com/airbnb/enzyme) for unit and integration tests
- [ESLint](https://eslint.org/) along with [airbnb rules](https://www.npmjs.com/package/eslint-config-airbnb) for JS linting
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) along with [commitizen](https://github.com/commitizen/cz-cli) for changelog automatic generation

# Tech stack

Several packages were used for this development. But the most important ones would be the following:

- [ReactJS](https://reactjs.org/) for building dynamic UI
- [Redux](https://redux.js.org/docs/introduction/) for state management
- [Proptypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for type checking on each component's properties
- [styled-components](https://www.styled-components.com/) for styling
- [JSON Server](https://www.npmjs.com/package/json-server) for the backend. In the future it is planned to use a backend REST api using this [boilerplate](https://github.com/Comum/PHP-api-skeleton).

# Tests
To run unit and integration tests, you'll need to run:
`npm run test` or `yarn test`

To check the project's test coverage, you'll need to run:
`yarn coverage` - this will serve the test coverage in your browser
or
`yarn test --coverage` - this will print the coverage report in the terminal
