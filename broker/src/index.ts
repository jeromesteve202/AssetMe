import express from "express";

import { showAllAccountsRouter } from "../account/accounts-all";
import { showAccountTradingById } from "../account/account-trading-id";
import { showAccountById } from "../account/account-by-id";
import { showBankById } from "../bank/get-bank-by-id";
import { postBankById } from "../bank/post-bank-by-id";
import { deleteBankById } from "../bank/delete-bank-by-id";
import { createAccount } from "../account/account-create";
import { deleteAccount } from "../account/account-delete";
import { updateAccount } from "../account/account-update-by-id";

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

app.listen(5000, () => {
  console.log('Listening on 5000');
});