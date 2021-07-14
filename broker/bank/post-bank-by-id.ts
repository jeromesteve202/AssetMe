import express, { Request, Response } from 'express';
const request = require('request');

const router = express.Router();

router.post('/api/broker/bank/accounts/:id', (req: Request, res: Response) => {
  const { name, bank_code_type, bank_code, account_number } = req.body;

  const options = {
    url: `https://broker-api.sandbox.alpaca.markets/v1/accounts/${req.params.id}/recipient_banks`,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    },
    body: JSON.stringify({
      name,
      bank_code_type, 
      bank_code,
      account_number
    }),
    auth: {
      username: process.env.APCA_API_KEY_ID,
      password: process.env.APCA_API_SECRET_KEY
    }
  };

  request(options, function (error: any, response: { statusCode: number; }, body: any) {
    if (!error &&  response.statusCode == 200) {
      res.send(body);
    }
  })
});

export { router as postBankById };