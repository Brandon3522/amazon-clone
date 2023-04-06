/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');

// Secret API key
const stripe = require('stripe')(
    // eslint-disable-next-line max-len
    process.env.REACT_APP_STRIPE_API_KEY
);

// Express API setup
// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello'));

app.post('/payments/create', async (request, response) => {
  try {
    const total = request.query.total;
    console.log(`Payment request ${total}`);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // Subunits of currency
      currency: 'usd',
    });
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    }); // Ok - created
  } catch (error) {
    response.status(400).end();
    console.error(`Error in post request: ${error}`);
  }
});

// Listen command
exports.api = functions.https.onRequest(app);

// Base Endpoint
// http://localhost:5001/clone-f4a00/us-central1/api
