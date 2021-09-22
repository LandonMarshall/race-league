# race-league

To setup, `cp db.config.example.js db.config.js`. Then, create a postgres database and change the database name in config to the same name.
Then, `yarn` to download dependencies.

Use `npm run start` to start the express server.

Once that is started, you can run `yarn run sequelize db:seed:all` To seed the database with some test data. I currently have the database set to wipe
each time the server is restarted, so these have proven to be useful.

React will also run on the express server but it will not hot-reload this way.

To make any changes to the react running on the express server, run `npm run-script build`

Use `cd client` and then `npm start` to start the react server.
