import express, { Request, Response } from 'express';
const request = require('request');

const router = express.Router();

router.delete('/api/bank/accounts/:user_id/bank/:bank_id', (req: Request, res: Response) => {
  const options = {
    url: `https://broker-api.sandbox.alpaca.markets/v1/accounts/${req.params.user_id}/recipient_banks/${req.params.bank_id}`,
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    },
    auth: {
      username: process.env.APCA_API_KEY_ID,
      password: process.env.APCA_API_SECRET_KEY
    }
  };

  request(options, function (error: any, response: { statusCode: number; }, body: any) {
    if (!error &&  response.statusCode == 204) {
      res.send(JSON.stringify(`Bank ${req.params.bank_id} has been removed from user ${req.params.user_id}`));
    }
  })
});

export { router as deleteBankById };