# tic-tac-toe

A small two-player, local hot-seat tic-tac-toe game on a classic 3x3 board, built with React as a timepass / learning project. Players alternate placing X and O, win detection uses incremental row, column and diagonal counters, and a "restart game!" button resets the board.

## Live demo

http://neeleshsaxena.github.io/tic-tac-toe

(Deployed via `gh-pages` — see the `homepage` field in `package.json`.)

## Features

- Classic 3x3 board, two human players sharing the keyboard / mouse
- Tracks total steps played and whose turn is next
- Detects wins along rows, columns, both diagonals, and draws
- "Restart game!" button to reset state
- Single test (`Game.test.js`) verifying the title renders

## Tech stack

- React 16 (`react` / `react-dom` `^16.12.0`) — class component for `Game`, functional components for `Board` and `Square`
- `react-scripts` `5.0.1` (Create React App tooling, post-Dependabot bump)
- `@testing-library/react` for the smoke test
- `gh-pages` for deployment

## Project layout

```
src/
  index.js              # ReactDOM.render entry point
  constants.js          # UI strings (titles, status messages)
  Game.test.js          # smoke test
  components/
    Game.js             # top-level class component, game state + win detection
    Board.js            # renders the 3x3 grid
    Square.js           # single cell button
  styles/
    Game.css
```

## Getting started

Requires Node.js (any modern LTS works since `react-scripts` is on 5.x).

```bash
npm install
npm start
```

Then open http://localhost:3000.

> Historical note: this repo used to depend on `react-scripts` 3.x, which required
> `NODE_OPTIONS=--openssl-legacy-provider` on Node 17+ because of the OpenSSL 3
> change. After the bump to `react-scripts` 5.0.1, that workaround is no longer
> needed.

## Available scripts

From `package.json`:

| Script | What it does |
| --- | --- |
| `npm start` | Runs the app in development mode at http://localhost:3000 |
| `npm run build` | Produces a production build in `build/` |
| `npm test` | Runs the React Testing Library tests in watch mode |
| `npm run eject` | Standard CRA eject (one-way) |
| `npm run deploy` | Builds and publishes `build/` to the `gh-pages` branch (runs `predeploy` -> `yarn build` first) |

## Deploy

The repo is wired up for GitHub Pages via the `gh-pages` package:

```bash
npm run deploy
```

This runs the `predeploy` hook (`yarn build`) and then pushes the `build/` directory to the `gh-pages` branch. GitHub Pages then serves it at the URL in the `homepage` field.

## License

No license file is included — this is a personal sandbox project.
