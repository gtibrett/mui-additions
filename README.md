# General Notes

## TODO
- [ ] Reconcile all types with endpoint output
  - [ ] Confirm optional attributes for historical data

## OpenAI Integration (Experimental)

You need to register for an account and add your key to .env
```
OPENAI_KEY=
```

## SQL DB

Following pattern for `ergast-f1-api` DB instance. There is a Docker image for running the database locally.

### Commands
```
yarn build:db
yarn start:db
yarn stop:db
```

## Sample .env file
```
PORT=3001

DB_HOST=localhost
DB_PORT=3306
DB_USER=effonedb
DB_PASSWORD=effonedb
DB_DATABASE=effonehub
```

## Based on ergast-f1-api
Using my fork at [gtibrett/ergast-f1-api](https://github.com/gtibrett/ergast-f1-api/tree/effone-develop)