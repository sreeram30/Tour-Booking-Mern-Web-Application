import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [{
        id: "01",
        title: "Pearl City",
        city: "Thoothukudi",
        distance: 300,
        address: "TamilNadu",
        price: 99,
        maxGroupSize: 10,
        desc: "Thoothukudi is known as Pearl City due to the pearl fishing carried out in the town. It is a commercial seaport which serves the inland cities of Southern India and is one of the sea gateways of Tamil Nadu.",
        reviews: [

        ],
        avgRating: 4.5,
        photo: tourImg01,
        featured: true,
    },
    {
        id: "02",
        title: "Golden City",
        city: "Jaisalmer",
        distance: 400,
        address: " Rajasthan",
        price: 99,
        maxGroupSize: 8,
        desc: "Jaisalmer is sometimes called the Golden City of India because of the yellow sandstone used throughout the architecture of both the fort and the town below, imbues both with a certain golden-yellow light.",
        reviews: [{
            name: "jhon doe",
            rating: 4.6,
        }, ],
        avgRating: 4.5,
        photo: tourImg02,
        featured: true,
    },
    {
        id: "03",
        title: "Pink City",
        city: " Jaipur",
        distance: 500,
        address: " Rajasthan",
        price: 99,
        maxGroupSize: 8,
        desc: "In the year 1876, Prince Albert was to undertake a tour of India. Maharaja Sawai Ram Singh II, who was the then ruler of Jaipur, in his infinite spirit of hospitality, had the whole city painted pink terracotta in honour of the royal guest. Pink was considered the colour of hospitality.",
        reviews: [{
            name: "jhon doe",
            rating: 4.6,
        }, ],
        avgRating: 4.5,
        photo: tourImg03,
        featured: true,
    },
    {
        id: "04",
        title: "Electronic City",
        city: " Bangalore",
        distance: 500,
        address: "Karnataka",
        price: 99,
        maxGroupSize: 8,
        desc: "Bengaluru is considered India's electronic capital because it is its major exporter of information technology (IT). Why Bengaluru is known as the electronic capital of India: Bengaluru has mainly an IT service industry. Bangalore has India's best research university – IISC and other private engineering colleges.",
        reviews: [{
            name: "jhon doe",
            rating: 4.6,
        }, ],
        avgRating: 4.5,
        photo: tourImg04,
        featured: true,
    },
    {
        id: "05",
        title: "Diamond City",
        city: "Surat ",
        distance: 500,
        address: "Gujarat ",
        price: 99,
        maxGroupSize: 8,
        desc: "Surat has been one of the nerve centres of the global diamond industry. Around 90% of the world's diamonds that are mined are polished in Surat adding to about 80% of the Indian yearly diamond trade which is why there is no wonder as to why it is named as The Diamond city.",
        reviews: [{
                name: "jhon doe",
                rating: 4.6,

            },
            {
                name: "jhon doe",
                rating: 1.3,
            }
        ],
        avgRating: 4.5,
        photo: tourImg05,
        featured: true,
    },
    {
        id: "06",
        title: "Gods Owned City",
        city: " Kerala",
        distance: 500,
        address: " Kerala",
        price: 99,
        maxGroupSize: 8,
        desc: "According to Hindu mythology, Kerala was created by Lord Parasurama, an incarnation of Lord Vishnu by throwing his axe across the sea to create new land for his devotees to live peacefully. So, Kerala is God's own creation, hence it is called God's own country!",
        reviews: [{
            name: "jhon doe",
            rating: 4.6,
        }, ],
        avgRating: 4.5,
        photo: tourImg06,
        featured: true,
    },
    {
        id: "07",
        title: "Blue City",
        city: " Jodhpur",
        distance: 500,
        address: " Rajasthan",
        price: 99,
        maxGroupSize: 8,
        desc: "Jodhpur is known as the Blue City because all of the buildings in the oldest district are painted in a light shade of blue. This district lies to the north of the city and the colour scheme is almost uniform. The best vantage point to view the blue painting of Jodhpur is from the Meherangarh Fort's battlements",
        reviews: [{
            name: "jhon doe",
            rating: 4.6,
        }, ],
        avgRating: 4.5,
        photo: tourImg07,
        featured: true,
    },
    {
        id: "08",
        title: " Temple City",
        city: " Bhubaneswar",
        distance: 500,
        address: " Odisha",
        price: 99,
        maxGroupSize: 8,
        desc: "Bhubaneswar, the capital city of Odisha, is called the Temple City of India because it is home to over 500 temples! The city has a rich cultural heritage and is believed to have temples that date back to the 6th and 11th centuries.",
        reviews: [{
            name: "jhon doe",
            rating: 4.6,
        }, ],
        avgRating: 4.5,
        photo: tourImg03,
        featured: true,
    },
];

export default tours;