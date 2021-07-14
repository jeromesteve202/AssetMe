import express from "express";

import { showAllAccountsRouter } from "./broker/account/accounts-all";
import { showAccountTradingById } from "./broker/account/account-trading-id";
import { showAccountById } from "./broker/account/account-by-id";
import { showBankById } from "./broker/bank/get-bank-by-id";
import { postBankById } from "./broker/bank/post-bank-by-id";
import { deleteBankById } from "./broker/bank/delete-bank-by-id";
import { createAccount } from "./broker/account/account-create";
import { deleteAccount } from "./broker/account/account-delete";
import { updateAccount } from "./broker/account/account-update-by-id";

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