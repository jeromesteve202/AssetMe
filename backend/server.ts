import express from "express";

import { showAllAccountsRouter } from "./routes/account/accounts-all";
import { showAccountTradingById } from "./routes/account/account-trading-id";
import { showAccountById } from "./routes/account/account-by-id";

// Configure env vars in env file
require('dotenv').config();

const app = express();

app.use(showAllAccountsRouter)
app.use(showAccountById);
app.use(showAccountTradingById);

app.listen(3000, () => {
  console.log('Listening on 3000');
});