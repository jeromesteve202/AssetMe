// @ts-nocheck
import { AlpacaClient, AlpacaStream } from '@master-chief/alpaca';

const express = require("express");

// Configure env vars in env file
require('dotenv').config();

// init app
const app = express();

const client = new AlpacaClient({
  credentials: {
    key: process.env.APCA_API_KEY_ID,
    secret: process.env.APCA_API_SECRET_KEY,
    paper: true,
  },
  rate_limit: true,
})

const account = client.getAccount()
console.log(account);

// routes 
// TODO: move these routes to separate files


app.listen(3000, () => {
  console.log('Listening on 3000');
});