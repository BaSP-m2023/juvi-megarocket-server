import { Router } from 'express';

const subscriptions = require('../data/subscription.json');

const subscriptionsRouter = Router();

subscriptionsRouter.get('/', (req, res) => {
  res.json({
    data: subscriptions,
  });
});

subscriptionsRouter.get('/getById/:id', (req, res) => {
  const subscriptionId = req.params.id;
  const foundSubsc = subscriptions.find((subsc) => subsc.id.toString() === subscriptionId);
  if (foundSubsc) {
    res.send(foundSubsc);
  } else {
    res.send('Subscription not found');
  }
});

export default subscriptionsRouter;
