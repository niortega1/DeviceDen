import React from 'react';
import blackFridayImg from '../imgs/black_friday_banner.jpg';

// Sample Data
const peopleData = [
    {
        name: "Norman Kim",
        title: "Chief Executive Officer (CEO)",
        description: "Leads the strategic direction and vision of the company. Oversees all departments to ensure smooth operations. Engages with partners and stakeholders to build strong business relationships.",
        enjoy: "Norman has a passion for digital art and often visits galleries during his weekends. He also enjoys hiking and exploring nature trails.",
        funFact: "Once completed a three-week solo backpacking trip through Europe.",
        imageUrl: 'https://storage.googleapis.com/device-den/person2.jpg'
    },
    {
        name: "Ethan Martinez",
        title: "Cheif Technology Officer (CTO)",
        description: "Directs the tech vision of the company. Oversees all departments to ensure smooth operations. Engages with partners and stakeholders to build strong business relationships.",
        enjoy: "In his free time, Ethan loves coding passion projects and playing the guitar.",
        funFact: "Has a collection of over 100 guitars.",
        imageUrl: 'https://storage.googleapis.com/device-den/person3.jpg'
    },
    {
        name: "Ava Thompson",
        title: "Head of Marketing",
        description: "Manages the marketing, advertising, and promotional activities. Analyzes market trends and recommends changes to marketing and business development strategies based on analysis and feedback. Leads brand management and corporate identity.",
        enjoy: "Ava is an avid reader and is part of a local book club. She also enjoys pottery.",
        funFact: "She can speak 5 languages.",
        imageUrl: 'https://storage.googleapis.com/device-den/person4.jpg'
    },
    {
        name: "Leo Johnson",
        title: "Operations Manager",
        description: "Coordinates the daily operations of the company. Ensures projects are completeed on time and within budget. Manages vendor relations and logitics.",
        enjoy: "Leo has a keen interest in photography and often captures behind-the-scenes moments at the company.",
        funFact: "Has a collection of vintage cameras.",
        imageUrl: 'https://storage.googleapis.com/device-den/person1.jpg'
    },
    {
        name: "Zoe Patel",
        title: "Software Development Manager",
        description: "Ensures customer have a seamless experience with the company's products. Leads a team of customer support representatives. Gathers and analyzes customer feedback to inform product decisions.",
        enjoy: "Zoe loves traveling and trying out different cuisines. She also practices yoga.",
        funFact: "Has visited over 25 countries before turning 30.",
        imageUrl: 'https://storage.googleapis.com/device-den/person5.jpg'
    }
];

const Person = ({ person }) => (
    <div className="person-box">
        <div className="person-img-container">
            <img className="person-img" src={person.imageUrl} alt="person" />
        </div>
        <div className="person-name">{person.name}</div>
        <div className="person-title">{person.title}</div>
        <div className="person-description">{person.description}</div>
        <div className="person-enjoy">{person.enjoy}</div>
        <div className="person-fun-fact">{person.funFact}</div>
    </div>
);

function AboutUsPage() {
    return (
        <div className="about-us-container">
            <div className="black-friday-banner">
                <img src={blackFridayImg} alt="Black Friday Deals" />
            </div>
            <div className="person-container">
                {peopleData.map(person => (
                    <Person key={person.id} person={person} />
                ))}
            </div>
        </div>
    );
}


export default AboutUsPage;
