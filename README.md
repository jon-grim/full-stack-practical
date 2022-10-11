# Full-Stack practical

## Running the project

To start the backend API

```shell
yarn server
```

The server is now running on `localhost:3000`

To start the web client, run from another terminal window

```shell
yarn dev
```

The client is now running on `http://127.0.0.1:5173/`

## Repo structure

### Server

The project uses Express for a web server and API. There is a single file to start - `srver/server.js`

### Client

The client has an `index.html` at the root of the project. All other client code is within the `src` directory.

## Project tech stack

### Server

The web server is Express.js and uses Faker for generating fake data

### Client

The client application is built with:

- Vite for bundling and development
- Vue 3, Typescript
- Tailwind is installed and available for use
- eslint and prettier for linting and formatting, respectively

It is recommended you use VS Code and Volar for the best development experience.
