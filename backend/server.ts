import express from "express";

import { showAllAccountsRouter } from "./routes/account/accounts-all";
import { showAccountTradingById } from "./routes/account/account-trading-id";
import { showAccountById } from "./routes/account/account-by-id";
import { showBankById } from "./routes/bank/get-bank-by-id";
import { postBankById } from "./routes/bank/post-bank-by-id";
import { deleteBankById } from "./routes/bank/delete-bank-by-id";
import { createAccount } from "./routes/account/account-create";
import { deleteAccount } from "./routes/account/account-delete";
import { updateAccount } from "./routes/account/account-update-by-id";

// Configure env vars in env file
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Account
app.use(showAllAccountsRouter)
app.use(showAccountById);
app.use(showAccountTradingById);
app.use(createAccount);
app.use(deleteAccount);
app.use(updateAccount);

// Bank
app.use(showBankById);
app.use(postBankById);
app.use(deleteBankById);

app.listen(3000, () => {
  console.log('Listening on 3000');
});