import { createSlice } from '@reduxjs/toolkit';
import phoneImg from '../imgs/smart-phone1.jpg';
import phoneImg2 from '../imgs/smart-phone2.jpg';
import phoneImg3 from '../imgs/smart-phone3.jpg';
import phoneImg4 from '../imgs/smart-phone4.jpg';
import laptopImg from '../imgs/laptop1.jpg';
import laptopImg2 from '../imgs/laptop2.jpg';
import laptopImg3 from '../imgs/laptop3.jpg';
import laptopImg4 from '../imgs/laptop4.jpg';
import tabletImg from '../imgs/tablet1.jpg';
import tabletImg2 from '../imgs/tablet2.jpg';
import tabletImg3 from '../imgs/tablet3.jpg';
import tabletImg4 from '../imgs/tablet4.jpg';
import smarthomeImg from '../imgs/smarthome1.jpg';
import smarthomeImg2 from '../imgs/smarthome2.jpg';
import smarthomeImg3 from '../imgs/smarthome3.jpg';
import smarthomeImg4 from '../imgs/smarthome4.jpg';
import smarthomeImg5 from '../imgs/smarthome5.jpg';
import smarthomeImg6 from '../imgs/smarthome6.jpg';
import smarthomeImg7 from '../imgs/smarthome7.jpg';
import accessoriesImg from '../imgs/accessories1.jpg';
import accessoriesImg2 from '../imgs/accessories2.jpg';
import accessoriesImg3 from '../imgs/accessories3.jpg';
import accessoriesImg4 from '../imgs/accessories4.jpg'; 
import accessoriesImg5 from '../imgs/accessories5.jpg';
import accessoriesImg6 from '../imgs/accessories6.jpg';
import accessoriesImg7 from '../imgs/accessories7.jpg';
import accessoriesImg8 from '../imgs/accessories8.jpg';
import accessoriesImg9 from '../imgs/accessories9.jpg';
import accessoriesImg10 from '../imgs/accessories10.jpg';
import accessoriesImg11 from '../imgs/accessories11.jpg';
import accessoriesImg12 from '../imgs/accessories12.jpg';
import accessoriesImg13 from '../imgs/accessories13.jpg';
import accessoriesImg14 from '../imgs/accessories14.jpg';
import accessoriesImg15 from '../imgs/accessories15.jpg';

const productsSlice = createSlice({
    name: 'products',
    initialState: [
        { id: 1, name: "Apple iPhone 14 Pro", price: 999.99, category: "mobile", image: phoneImg, description: "iPhone 14 Pro. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features. 5G Ultra Wideband is now in more and more places, so more and more people can do amazing things with iPhone 14 Pro." },
        { id: 2, name: "Samsung Galaxy S22", price: 749.99, category: "mobile", image: phoneImg2, description: "The Samsung Galaxy S22 includes a Snapdragon 8 Gen 1 chipset, 8GB RAM coupled with 128/256GB storage, and a 3700mAh battery with 25W charging speed. The phone sports a 6.1-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate." },
        { id: 3, name: "Google Pixel 7", price: 699.99, category: "mobile", image: phoneImg3, description: "The Pixel 7 comes with 6.3-inch OLED display with 90Hz refresh rate and Google Tensor G2 processor. Specs also include 4355mAh battery, Dual camera on the back with 50MP main sensor and 10.8MP front selfie camera." },
        { id: 4, name: "Samsung Galazy Z Flip 5", price: 799.99, category: "mobile", image: phoneImg4, description: "The Samsung Galaxy Z Flip 5 comes with 6.7-inch Dynamic AMOLED display with 120Hz refresh rate and Qualcomm Snapdragon 8 Gen 2 processor. Specs also include 3.4-inch Super AMOLED cover display, 3700mAh battery and Dual camera setup on the back." },
        { id: 5, name: "Apple MacBook Pro 13in", price: 1299.99, category: "laptop", image: laptopImg, description: "Apple MacBook Pro comes with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage." },
        { id: 6, name: "Acer 3 AMD", price: 1180.99, category: "laptop", image: laptopImg2, description: "The Acer Aspire 3 15 (2023) is a budget ultraportable Windows laptop. It has a 15.6-inch FHD (1920 x 1080) TN display, an Intel Core i3-N305 CPU, integrated Intel UHD Graphics, and 8GB of memory"},
        { id: 7, name: "Apple MacBook Pro 16in", price: 1999.99, category: "laptop", image: laptopImg3, description: "Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage."},
        { id: 8, name: "Microsoft Surface Pro 7", price: 1099.99, category: "laptop", image: laptopImg4, description: "The Microsoft Surface Pro 7 is the latest in a long line of 2-in-1 tablets, and not much has changed in terms of design since the original. You get a large 12.3-inch 3:2 screen that works well in landscape or portrait and supports stylus as well as multi-touch input. The Surface Pro 7 is expensive and you'll most probably need to spend more for a Type Cover keyboard attachment."},
        { id: 9, name: "Google Pixel Tablet", price: 599.99, category: "tablet", image: tabletImg, description:"Google Pixel Tablet tablet was launched on 10th May 2023. The tablet comes with a 10.95-inch touchscreen display offering a resolution of 2560x1600 pixels at a pixel density of 276 pixels per inch (ppi). Google Pixel Tablet is powered by an octa-core Google Tensor G2, Titan M2 security coprocessor processor. It comes with 8GB of RAM." },
        { id: 10, name: "Apple iPad Pro 11-inch (2022)", price: 799.99, category: "tablet", image: tabletImg2, description: "Apple iPad Pro 11-inch (2022) Wi-Fi + Cellular tablet was launched on 18th October 2022. The tablet comes with a 11.00-inch touchscreen display offering a resolution of 2388x1668 pixels at a pixel density of 264 pixels per inch (ppi). Apple iPad Pro 11-inch (2022) Wi-Fi + Cellular is powered by an octa-core Apple M2 processor. It comes with 8GB of RAM."},
        { id: 11, name: "Samsung Galaxy Tab S6", price: 249.99, category: "tablet", image: tabletImg3, description: "The Galaxy Tab S6 features a Snapdragon 855 processor, 128 or 256GB internal storage options, and 6 or 8GB RAM. A 10.5-inch Super AMOLED panel with razor-thin bezels, quad AKG-tuned speakers, and an all-new S Pen are also included."},
        { id: 12, name: "Samsung Galaxy Tab S6 Lite (2022)", price: 1399.99, category: "tablet", image: tabletImg4, description: "Samsung Galaxy Tab S6 Lite (2022) tablet was launched on 13th May 2022. The tablet comes with a 10.40-inch touchscreen display offering a resolution of 2000x1200 pixels. Samsung Galaxy Tab S6 Lite (2022) is powered by an octa-core Qualcomm Snapdragon 720G processor. It comes with 4GB of RAM. The Samsung Galaxy Tab S6 Lite (2022) runs Android 12 and is powered by a 7040mAh non-removable battery."},
        { id: 13, name: "Blink Outdoor Residential Smart Camera", price: 89.99, category: "smarthome", image: smarthomeImg, description:"Blink Outdoor is a wireless battery-powered HD security camera that helps you monitor your home day or night with infrared night vision.With long-lasting battery life, Outdoor runs for up to two years on two AA lithium batteries (included)."},
        { id: 14, name: "Google Nest Hub", price: 199.99, category: "smarthome", image: smarthomeImg2, description: "Google Nest Hub is the one place to control your smart home, it works with hundreds of compatible devices. Your home at a glance. Tap Nest Hub to turn on the lights or see who is at the door. Easily answer the door from anywhere in your home."},
        { id: 15, name: "SimpliSafe Wireless Door Camera", price: 194.99, category: "smarthome", image: smarthomeImg3, description: " The Wireless Outdoor Security Camera will send instant alerts whenever someone approaches. And with Smart Person Detection, it can tell the difference between people, vehicles and animals. That means you only get the alerts that matter. Anyone can set up the camera in minutes. After that you'll get strong performance wherever it is on your property with 2 built-in Wi-Fi antennas. It is advanced security from the outside in."},
        { id: 16, name: "Ecobee3 lite Smart Thermostat", price: 149.99, category: "smarthome", image: smarthomeImg4, description: "Sleek design and elevated comfort meet impactful energy savings. Save up to 23% annually on heating and cooling costs with ecobee3 lite, the smart thermostat that helps you live smarter and save more. Get a new handle on control and convenience. Manage your comfort from anywhere with the ecobee app on your iOS or Android mobile device. Compared to a hold of 72°F. Occupancy detection manages temperature automatically."},
        { id: 17, name: "LG - 65in Class G3 Series OLED 4K UHD Smart TV", price: 2799.99, category: "smarthome", image: smarthomeImg5, description: "The LG OLED evo G-series comes loaded with the AI Processor Gen 6—made exclusively for LG OLED—for even better picture and performance. Brightness Booster Max adjusts the picture for up to 70% brighter images¹ so you can see rich, vibrant colors and incredible contrast, even in well-lit rooms. AI tech and deep learning sense what you're watching and select the best picture and sound settings for an immersive viewing experience. "},
        { id: 18, name: "TCL - QLED - 55in Class Q7 4K HDR Smart TV", price: 599.99, category: "smarthome", image: smarthomeImg6, description: "TCL Q7 Class Smart TVs offers the perfect TV for fast action movies, sports, and next level gaming with QLED Quantum Dot technology and HDR ULTRA with Dolby Vision IQ you can enjoy enhanced contrast and vivid colors. High Brightness PRO Direct LED Backlight produces up to 1,000 nits peak brightness for dazzling specular highlights, perfect for any viewing environment. 120Hz native panel refresh rate with Motion Rate 480 focuses on best-in-class motion clarity producing smooth video playback. With TCL's Game Accelerator 240 and Auto Game Mode gameplay is blistering fast keeping you ahead of the competition. TCL Q Class Smart TVs are True Premium TVs. "},
        { id: 19, name: "Sonos - Move Portable Smart Speaker", price: 399.99, category: "smarthome", image: smarthomeImg7, description: "Play your favorite tunes anywhere with this weatherproof and drop-resistant Sonos Move portable speaker. The Trueplay automatic tuning adapts and balances the sound based on where you are and what you're listening to. This Sonos Move portable speaker incorporates built-in support for Wi-Fi, Bluetooth, Airplay and the Sonos app to let you stream audio from a smart device."},
        { id: 20, name: "Backbone Mobile Controller", price: 99.99, category: "accessories", image: accessoriesImg, description: "Backbone One transforms your Android and all-new iPhone 15 Series into the ultimate gaming console. Snap in your phone and play any game or service that supports controllers, including Google Play Store, Xbox Game Pass Ultimate, or even stream from your Xbox or PC. The Backbone app organizes your content library and game streaming services into an integrated user experience. Uncover a new world of premium gaming in seconds."},
        { id: 21, name: "GoPro HERO11 Black 5K Action Camera", price: 349.99, category: "accessories", image: accessoriesImg2, description: "Record your memorable adventures with this GoPro HERO11 Black camera. The rear LCD screen lets you conveniently frame your shots to optimize picture quality, and the image sensor features a wide field of view to capture more content. This GoPro HERO11 Black camera boasts HyperSmooth 5.0 stabilization and Horizon Lock for crisp footage even if the camera moves and captures 5.3K videos and 27MP photos for detailed visuals."},
        { id: 22, name: "Logitech - MX Mechanical Mini Wireless Keyboard", price: 135.99, category: "accessories", image: accessoriesImg3, description: "Introducing MX Mechanical Mini- a minimalist keyboard with extraordinary feel, precision, and performance. Low-profile mechanical typing delivers satisfying feedback in your choice of key switches Tactile Quiet, Clicky, or Linear. MX Mechanical Mini is crafted for ergonomic comfort, with smart illumination and Easy-Switch allowing you to connect up to 3 devices and stay in your flow for hours."},
        { id: 23, name: "DJI - Mavic 3 Pro More Combo Drone and RC Pro Remote", price: 3899.99, category: "accessories", image: accessoriesImg4, description: "The DJI Mavic 3 Series features next-level imaging performance. Mavic 3 Pro's triple-camera system ushers in a new era of camera drones by housing three sensors and lenses with different focal lengths. Equipped with a Hasselblad camera and dual tele cameras, Mavic 3 Pro is a triple-camera drone that unlocks new shooting perspectives, allowing you to embrace creative freedom further, capture fascinating scenery, explore photographic storytelling, and make cinematic masterpieces."},
        { id: 24, name: "Amazon - Echo Dot with Clock (5th Gen) Speaker", price: 59.99, category: "accessories", image: accessoriesImg5, description: "Echo Dot - Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room."},
        { id: 25, name: "Kindle (2022 release)", price: 99.99, category: "accessories", image: accessoriesImg6, description: "The lightest and most compact Kindle, now with a 300 ppi high-resolution display for sharp text and images. Read comfortably with a glare-free, paper-like display. The adjustable front light and dark mode make reading effortless, day and night. "},
        { id: 26, name: "Meta Quest 2 - Advanced All-In-One Virtual Reality Headset", price: 299.99, category: "accessories", image: accessoriesImg7, description: "Meta Quest 2 is the all-in-one system that truly sets you free to roam in VR with no wires or cables to limit your experience. A built-in battery lets you explore further for longer as you discover a growing library of over 350 titles across gaming, social/multiplayer, fitness and entertainment. "},
        { id: 27, name: "Apple Vision Pro", price: 3499.99, category: "accessories", image: accessoriesImg8, description: "Apple Vision Pro features an ultra-high-resolution display system that packs 23 million pixels across two displays — more than a 4K TV for each eye — and the brand-new R1 chip, for a virtually lag-free, real-time view of the world"},
        { id: 28, name: "Xbox Series X", price: 499.99, category: "accessories", image: accessoriesImg9, description: "The Xbox Series X console delivers next-generation capabilities powered by the Xbox Velocity Architecture, such as faster loading, the ability to seamlessly switch between multiple games with Quick Resume, richer and more dynamic worlds, and frame rates up to 120 FPS." },
        { id: 29, name: "PlayStation 5 Console", price: 499.99, category: "accessories", image: accessoriesImg10, description: "Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture."},
        { id: 30, name: "Nintendo Switch OLED", price: 349.99, category: "accessories", image: accessoriesImg11, description: "Play at home or on the go with a vibrant OLED screen. Play on your TV at home or pick up and play in handheld mode on a vivid 7-inch OLED screen with the Nintendo Switch OLED Model system. The system also features 64 GB of internal storage, enhanced audio, a wide, adjustable stand, and a dock with a wired LAN port. Enjoy three modes in one system. "},
        { id: 31, name: "Sony - WH1000XM4 Wireless Noise-Cancelling Headphones", price: 349.99, category: "accessories", image: accessoriesImg12, description: "Sony's intelligent noise-cancelling headphones with premium sound elevate your listening experience with the ability to personalize and control everything you hear. Get up to 30 hours of battery life with quick charging capabilities, enjoy an enhanced Smart Listening feature set, and carry conversations hands-free with speak-to-chat."},
        { id: 32, name: "House of Marley Bamboo Wireless Bluetooth Speaker", price: 129.99, category: "accessories", image: accessoriesImg13, description: "Wirelessly stream music with the get together Mini Bluetooth portable audio system. Light up your day with vibrant sound that keeps everyone smiling. The get together Mini—a scaled-down version of the classic get together speakerphone a lot into a small package. With its bamboo face and choice of colors, It delivers solid performance without sacrificing great-looking design. Using bamboo in our speakers enables frequent harvesting without causing damage to the Ecosystem."},
        { id: 33, name: "Razer - Leviathan V2 X Bluetooth Gaming Speaker with RGB Lighting", price: 99.99, category: "accessories", image: accessoriesImg14, description: "Light up your setup with an audio experience like never seen before. Meet the Razer Leviathan V2 X—a compact, USB Type C powered PC gaming soundbar that makes a worthy addition to your battlestation for all your games, movies, and music."},
        { id: 34, name: "Apple Watch Series 8 - Black", price: 699.99, category: "accessories", image: accessoriesImg15, description: "Apple Watch Series 8 features advanced health sensors and apps, so you can take an ECG¹, measure heart rate¹ and blood oxygen², and track temperature changes³ for advanced insights into your menstrual cycle⁴. And with Crash Detection, sleep stages tracking, and advanced workout metrics, it helps you stay active, healthy, safe, and connected. See Dimension section below for band sizing information. "}

    ],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        },
        editProduct: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});

export const { addProduct, removeProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;