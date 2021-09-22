# race-league

To setup, `cp db.config.example.js db.config.js`. Then, create a postgres database and change the database name in config to the same name.
Then, `yarn` to download dependencies.

Use `npm run start` to start the express server.
React will also run on the express server but it will not hot-reload this way.
To make any changes on the react server, run `npm run-script build`

Use `cd client` and then `npm start` to start the react server.
