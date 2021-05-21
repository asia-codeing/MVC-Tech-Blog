const { Post } = require('../models');

const postData = [
    {
        title: "Wired" ,
        content: "Wired is a massively popular publication, good at capturing real insights into the tech world, no stranger to topics like technology, entertainment, science, culture, politics, and social media. Informed and ",
        user_id: 2
    },
    {
        title: "TechCrunch" ,
        content: "The blog publishes content on businesses related to tech, analysis of emerging trends in tech, technology news, and listings of new tech products in the market. It is one of the first publications to report broadly on tech startups and funding rounds.",
        user_id: 3
    },
    {
        title: "Venturebeat" ,
        content: "VentureBeat is one of the leading tech blogs for transformative tech events and news. It reports breaking news on comprehensive content about prime tech businesses along with incisive coverage of the gaming industry. The blog comprises a series of tech-related articles, newsletters, general news, and businesses.",
        user_id: 4
    }
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports =  seedPosts;