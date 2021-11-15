# zanzibar

# Running the app

## Running the flask app
1. From inside `cruzcontrol` dir
2. `flask run`
3. Server will run on `http://127.0.0.1:5000/`

## Running the next server
1. From inside `zanzibar`
2. cd `example-app/nextjs-blog`
3. `yarn run next dev`

## Gotchas
- In `lib/tweets.js` make sure `base_url` is set accurately for each env
    - Should be pointing to `http://127.0.0.1:5000` for dev and `https://cruzcontrol-staging.herokuapp.com/` for prod
