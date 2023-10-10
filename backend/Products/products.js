// const phoneImg = require('../../src/imgs/smart-phone1.jpg');
// const phoneImg2 = require('../../src/imgs/smart-phone2.jpg');
// const phoneImg3 = require('../../src/imgs/smart-phone3.jpg');
// const phoneImg4 = require('../../src/imgs/smart-phone4.jpg');
// const laptopImg = require('../../src/imgs/laptop1.jpg');
// const laptopImg2 = require('../../src/imgs/laptop2.jpg');
// const laptopImg3 = require('../../src/imgs/laptop3.jpg');
// const laptopImg4 = require('../../src/imgs/laptop4.jpg');
// const tabletImg = require('../../src/imgs/tablet1.jpg');
// const tabletImg2 = require('../../src/imgs/tablet2.jpg');
// const tabletImg3 = require('../../src/imgs/tablet3.jpg');
// const tabletImg4 = require('../../src/imgs/tablet4.jpg');
// const smarthomeImg = require('../../src/imgs/smarthome1.jpg');
// const smarthomeImg2 = require('../../src/imgs/smarthome2.jpg');
// const smarthomeImg3 = require('../../src/imgs/smarthome3.jpg');
// const smarthomeImg4 = require('../../src/imgs/smarthome4.jpg');
// const smarthomeImg5 = require('../../src/imgs/smarthome5.jpg');
// const smarthomeImg6 = require('../../src/imgs/smarthome6.jpg');
// const smarthomeImg7 = require('../../src/imgs/smarthome7.jpg');
// const accessoriesImg = require('../../src/imgs/accessories1.jpg');
// const accessoriesImg2 = require('../../src/imgs/accessories2.jpg');
// const accessoriesImg3 = require('../../src/imgs/accessories3.jpg');
// const accessoriesImg4 = require('../../src/imgs/accessories4.jpg'); 
// const accessoriesImg5 = require('../../src/imgs/accessories5.jpg');
// const accessoriesImg6 = require('../../src/imgs/accessories6.jpg');
// const accessoriesImg7 = require('../../src/imgs/accessories7.jpg');
// const accessoriesImg8 = require('../../src/imgs/accessories8.jpg');
// const accessoriesImg9 = require('../../src/imgs/accessories9.jpg');
// const accessoriesImg10 = require('../../src/imgs/accessories10.jpg');
// const accessoriesImg11 = require('../../src/imgs/accessories11.jpg');
// const accessoriesImg12 = require('../../src/imgs/accessories12.jpg');
// const accessoriesImg13 = require('../../src/imgs/accessories13.jpg');
// const accessoriesImg14 = require('../../src/imgs/accessories14.jpg');
// const accessoriesImg15 = require('../../src/imgs/accessories15.jpg');


const cart = [
    { id: 1, name: "Apple iPhone 14 Pro", price: 99999, category: "mobile", image: phoneImg},
    { id: 2, name: "Samsung Galaxy S22", price: 74999, category: "mobile", image: phoneImg2},
    { id: 3, name: "Google Pixel 7", price: 69999, category: "mobile", image: phoneImg3},
    { id: 4, name: "Samsung Galazy Z Flip 5", price: 79999, category: "mobile", image: phoneImg4},
    { id: 5, name: "Apple MacBook Pro 13in", price: 129999, category: "laptop", image: laptopImg},
    { id: 6, name: "Acer 3 AMD", price: 118099, category: "laptop", image: laptopImg2},
    { id: 7, name: "Apple MacBook Pro 16in", price: 199999, category: "laptop", image: laptopImg3},
    { id: 8, name: "Microsoft Surface Pro 7", price: 109999, category: "laptop", image: laptopImg4},
    { id: 9, name: "Google Pixel Tablet", price: 59999, category: "tablet", image: tabletImg},
    { id: 10, name: "Apple iPad Pro 11-inch (2022)", price: 79999, category: "tablet", image: tabletImg2},
    { id: 11, name: "Samsung Galaxy Tab S6", price: 24999, category: "tablet", image: tabletImg3},
    { id: 12, name: "Samsung Galaxy Tab S6 Lite (2022)", price: 139999, category: "tablet", image: tabletImg4},
    { id: 13, name: "Blink Outdoor Residential Smart Camera", price: 8999, category: "smarthome", image: smarthomeImg},
    { id: 14, name: "Google Nest Hub", price: 19999, category: "smarthome", image: smarthomeImg2},
    { id: 15, name: "SimpliSafe Wireless Door Camera", price: 19499, category: "smarthome", image: smarthomeImg3},
    { id: 16, name: "Ecobee3 lite Smart Thermostat", price: 14999, category: "smarthome", image: smarthomeImg4},
    { id: 17, name: "LG - 65in Class G3 Series OLED 4K UHD Smart TV", price: 279999, category: "smarthome", image: smarthomeImg5},
    { id: 18, name: "TCL - QLED - 55in Class Q7 4K HDR Smart TV", price: 59999, category: "smarthome", image: smarthomeImg6},
    { id: 19, name: "Sonos - Move Portable Smart Speaker", price: 39999, category: "smarthome", image: smarthomeImg7},
    { id: 20, name: "Backbone Mobile Controller", price: 9999, category: "accessories", image: accessoriesImg},
    { id: 21, name: "GoPro HERO11 Black 5K Action Camera", price: 34999, category: "accessories", image: accessoriesImg2},
    { id: 22, name: "Logitech - MX Mechanical Mini Wireless Keyboard", price: 13599, category: "accessories", image: accessoriesImg3},
    { id: 23, name: "DJI - Mavic 3 Pro More Combo Drone and RC Pro Remote", price: 389999, category: "accessories", image: accessoriesImg4},
    { id: 24, name: "Amazon - Echo Dot with Clock (5th Gen) Speaker", price: 5999, category: "accessories", image: accessoriesImg5},
    { id: 25, name: "Kindle (2022 release)", price: 9999, category: "accessories", image: accessoriesImg6},
    { id: 26, name: "Meta Quest 2 - Advanced All-In-One Virtual Reality Headset", price: 29999, category: "accessories", image: accessoriesImg7},
    { id: 27, name: "Apple Vision Pro", price: 349999, category: "accessories", image: accessoriesImg8},
    { id: 28, name: "Xbox Series X", price: 49999, category: "accessories", image: accessoriesImg9},
    { id: 29, name: "PlayStation 5 Console", price: 49999, category: "accessories", image: accessoriesImg10},
    { id: 30, name: "Nintendo Switch OLED", price: 34999, category: "accessories", image: accessoriesImg11},
    { id: 31, name: "Sony - WH1000XM4 Wireless Noise-Cancelling Headphones", price: 34999, category: "accessories", image: accessoriesImg12},
    { id: 32, name: "House of Marley Bamboo Wireless Bluetooth Speaker", price: 12999, category: "accessories", image: accessoriesImg13},
    { id: 33, name: "Razer - Leviathan V2 X Bluetooth Gaming Speaker with RGB Lighting", price: 9999, category: "accessories", image: accessoriesImg14},
    { id: 34, name: "Apple Watch Series 8 - Black", price: 69999, category: "accessories", image: accessoriesImg15},
];

function getProductDetails(productId) {
    return cart.find(product => product.id === productId);
}

module.exports = cart;