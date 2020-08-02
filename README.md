# Take Home Assignement

**A Clicks Challenge exercise build with Vanilla JavaScript and Jest by [David García](https://www.linkedin.com/in/davidgarciaontivero/).**

## Getting Started

To get the exercise up and running you'll need a Linux, Windows or MacOSX computer with a bash/zshell terminal, Node JS and NPM installed.

### Prerequisites

Please, make sure you have:

- Node JS v.12 or higher
- NPM v.6 or higher

### Installing

- Drop the uncompressed folder into a terminal. Execute:

```bash
npm i
```

- After succesfully installed all dependencies. To build the `resultset.json` file run:

```bash
npm run solution
```

## Running the tests

Launch test suite manually by running:

```bash
npm run test
```

## Exercise provided specs

Given an array of clicks, return the subset of clicks where:

1. For each IP within each one hour period, only the most expensive click is placed into the
result set.
2. If more than one click from the same IP ties for the most expensive click in a one hour
period, only place the earliest click into the result set.
3. If there are more than 10 clicks for an IP in the overall array of clicks, do not include any
of those clicks in the result set.
The result set should be stored in an array of objects. Each object should represent a click. The
expected result set should be a subset of the original array.

## Troubleshooting

If you get this error executing the application:

```bash
Error: Object.fromEntries is not a function
```
**Please make sure you are using Node version 12 or above** `Object.fromEntries` is not supported in previous versions.

## Built With

- [NodeJS](https://nodejs.org/en/) - To run JavaScript and build output file
- [Jest](https://jestjs.io/) - A delightful JS testing framework

## About the author

- **David Garcia** - *Check out my work in Github* - [Davecarter](https://github.com/davecarter) and *YouTube* - [Aprendiendo Frontend](https://www.youtube.com/aprendiendofrontendchannel)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details