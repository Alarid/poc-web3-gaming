<h1 align="center">POC Web3 Gaming</h1>

## Start

To launch the app, you must first go to the [Developer Dashboard](https://dashboard.web3auth.io/) of Web3Auth and create a project on the Solana Blockchain.

You will then get a `CLIENT_ID` that can put in a new file `.env` at the project root:

```
VITE_CLIENT_ID=your_client_id
```

Finally, install the project dependencies and run the server:

```
yarn
yarn dev
```

## Stack

Vite / React / TypeScript / Tailwind

## Features

Core

- [x] Web3 Auth
- [x] Basic routing

Marketplace

- [x] Mocked API Routes
- [x] View items for sell
- [ ] Buy item(s)
- [ ] Sell item(s)
