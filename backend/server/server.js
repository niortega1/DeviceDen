const express = require('express');
const stripe = require('stripe')('sk_test_51MUDPwJvPCwdTBgxdlap85gsk6C7SIRxyU8Qx3EqYB2XBmbGP8zKMMBB8JYOyBTNksnRHuRnJw03iTaqGFW6qyf000rMdVZDX0');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'iPhone 14 Pro Max',
                    },
                    unit_amount: '99999',
                },
                quantity: 1,
            }],
            success_url: 'https://localhost:3000/success',
            cancel_url: 'https://localhost:3000/cancel',
        });
        res.json({ id: session.id })
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
})