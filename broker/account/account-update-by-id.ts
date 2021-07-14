import express, { Request, Response } from 'express';
const request = require('request');

const router = express.Router();

router.patch('/api/accounts/:id', (req: Request, res: Response) => {

  const options = {
    url: `https://broker-api.sandbox.alpaca.markets/v1/accounts/${req.params.id}`,
    method: 'PATCH',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    },
    body: JSON.stringify(req.body),
    auth: {
      username: process.env.APCA_API_KEY_ID,
      password: process.env.APCA_API_SECRET_KEY
    }
  };

  request(options, function (error: any, response: { statusCode: number; }, body: any) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
});

export { router as updateAccount };