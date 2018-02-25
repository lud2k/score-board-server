[![node version](https://img.shields.io/badge/Node-9.6.1-green.svg?style=flat-square)](https://nodejs.org/en/)
[![typescript version](https://img.shields.io/badge/TypeScript-2.4.1-green.svg?style=flat-square)](https://www.typescriptlang.org/)
[![express version](https://img.shields.io/badge/express-4.16.2-green.svg?style=flat-square)](https://material-ui-next.com/)

Score Board Server is a server for the Score Board project
(https://lud2k.github.io/score-board/public/index.html). You can use Score Board
without a backend but having a backend makes adding scores from the UI a lot easier.

## Usage

### Easiest setup

Score Board Server can simply be launched by running the score-board-server command.

Here is an setup example:

```bash
# install score-board-server globally
npm install -g score-board-server

# write a configuration file (see "configuration" section below)
vim config.json

# start the server
score-board-server
```

### Alternative setup

You may want to not install the project globally, in which case you could instead
do the following:

```bash
# initialize a npm project and install in this project
npm init
npm install --save score-board-server

# write a configuration file (see "configuration" section below)
vim config.json

# write a script (optionally you can pass the config to startServer())
echo "require('score-board-server').startServer()" > index.js

# run your script
node index.js
```

In case it crashes, you can also hook this up to [Forever](https://github.com/foreverjs/forever).

## Configuration

The file config.json should be created and should contain the following values.

```json
{
  // required
  "database": {
    // required
    "type": "google-sheets",
    // required
    "spreadsheetId": "googleSheetId",
    // optional
    "secretsPath": "secrets.json"
  },
  // optional
  "title": "title",
  // optional
  "port": 3030,
  // optional
  "baseUrl": "http://localhost:3030",
  // optional
  "scoreBoardUiScriptPath": "path/to/score-board/frontend.js"
}
```


## Development

The best way to work on this project is to run `npm run dev`. This will start
a web server on the port 3030. You can then open `http://localhost:3030/` in
your favorite browser. Any change you make to the code will trigger a restart
of the server.

You may also run the following commands:
- `npm run build` to build the project
- `npm run lint` to lint the code


## License

This project is licensed under the terms of the [MIT license](https://github.com/lud2k/score-board-server/blob/master/LICENSE).
