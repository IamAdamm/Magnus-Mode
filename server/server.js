require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

// Enable CORS for all routes (allow requests from localhost:3000)
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from this origin
    methods: ['GET', 'POST'],         // Allow GET and POST requests
    credentials: true                 // Allow credentials like cookies
}));

app.use(express.json());

const storeItems = new Map([
    [1, { priceInCents: 10000, name: 'Learn React Today' }],
    [2, { priceInCents: 20000, name: 'Learn CSS Today' }],
]);

app.post('/create-checkout-session', async (req, res) => {
    console.log('ok here');
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id);
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                };
            }),
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
        });
        res.json({ url: session.url });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(3001, () => console.log('Server is running on port 3001'));