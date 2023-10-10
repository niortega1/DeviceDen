const express = require('express');
const stripe = require('stripe')('sk_test_51MUDPwJvPCwdTBgxdlap85gsk6C7SIRxyU8Qx3EqYB2XBmbGP8zKMMBB8JYOyBTNksnRHuRnJw03iTaqGFW6qyf000rMdVZDX0');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const cart = [
    { id: 1, name: "Apple iPhone 14 Pro", price: 99999, category: "mobile"},
    { id: 2, name: "Samsung Galaxy S22", price: 74999, category: "mobile"},
    { id: 3, name: "Google Pixel 7", price: 69999, category: "mobile"},
    { id: 4, name: "Samsung Galazy Z Flip 5", price: 79999, category: "mobile"},
    { id: 5, name: "Apple MacBook Pro 13in", price: 129999, category: "laptop"},
    { id: 6, name: "Acer 3 AMD", price: 118099, category: "laptop"},
    { id: 7, name: "Apple MacBook Pro 16in", price: 199999, category: "laptop"},
    { id: 8, name: "Microsoft Surface Pro 7", price: 109999, category: "laptop"},
    { id: 9, name: "Google Pixel Tablet", price: 59999, category: "tablet"},
    { id: 10, name: "Apple iPad Pro 11-inch (2022)", price: 79999, category: "tablet"},
    { id: 11, name: "Samsung Galaxy Tab S6", price: 24999, category: "tablet"},
    { id: 12, name: "Samsung Galaxy Tab S6 Lite (2022)", price: 139999, category: "tablet"},
    { id: 13, name: "Blink Outdoor Residential Smart Camera", price: 8999, category: "smarthome"},
    { id: 14, name: "Google Nest Hub", price: 19999, category: "smarthome"},
    { id: 15, name: "SimpliSafe Wireless Door Camera", price: 19499, category: "smarthome"},
    { id: 16, name: "Ecobee3 lite Smart Thermostat", price: 14999, category: "smarthome"},
    { id: 17, name: "LG - 65in Class G3 Series OLED 4K UHD Smart TV", price: 279999, category: "smarthome"},
    { id: 18, name: "TCL - QLED - 55in Class Q7 4K HDR Smart TV", price: 59999, category: "smarthome"},
    { id: 19, name: "Sonos - Move Portable Smart Speaker", price: 39999, category: "smarthome"},
    { id: 20, name: "Backbone Mobile Controller", price: 9999, category: "accessories"},
    { id: 21, name: "GoPro HERO11 Black 5K Action Camera", price: 34999, category: "accessories"},
    { id: 22, name: "Logitech - MX Mechanical Mini Wireless Keyboard", price: 13599, category: "accessories"},
    { id: 23, name: "DJI - Mavic 3 Pro More Combo Drone and RC Pro Remote", price: 389999, category: "accessories"},
    { id: 24, name: "Amazon - Echo Dot with Clock (5th Gen) Speaker", price: 5999, category: "accessories"},
    { id: 25, name: "Kindle (2022 release)", price: 9999, category: "accessories"},
    { id: 26, name: "Meta Quest 2 - Advanced All-In-One Virtual Reality Headset", price: 29999, category: "accessories"},
    { id: 27, name: "Apple Vision Pro", price: 349999, category: "accessories"},
    { id: 28, name: "Xbox Series X", price: 49999, category: "accessories"},
    { id: 29, name: "PlayStation 5 Console", price: 49999, category: "accessories"},
    { id: 30, name: "Nintendo Switch OLED", price: 34999, category: "accessories"},
    { id: 31, name: "Sony - WH1000XM4 Wireless Noise-Cancelling Headphones", price: 34999, category: "accessories"},
    { id: 32, name: "House of Marley Bamboo Wireless Bluetooth Speaker", price: 12999, category: "accessories"},
    { id: 33, name: "Razer - Leviathan V2 X Bluetooth Gaming Speaker with RGB Lighting", price: 9999, category: "accessories"},
    { id: 34, name: "Apple Watch Series 8 - Black", price: 69999, category: "accessories"},
];

function getProductDetails(productId) {
    return cart.find(product => product.id === productId);
}


app.post('/create-checkout-session', async (req, res) => {
    const { cart } = req.body;

    const line_items = cart.map(item => {
        const product = getProductDetails(item.productId);
        
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: product.name,
                },
                unit_amount: product.price,
            },
            quantity: item.quantity,
        };
    });

    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items,
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