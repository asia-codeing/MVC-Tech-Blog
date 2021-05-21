const { Comment } = require('../models');

const commentData = [
    {
       comment_text: "The tone is light and snarky, making it engaging as well as informative.",
       user_id: 3,
       post_id: 2
    },
    {
        comment_text: "o make sure you never miss an upload, download the TechCrunch app",
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: "The site hosts content for eight million monthly unique visitors, accounting for 18 million monthly page views.",
        user_id: 2,
        post_id: 4
    }
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports =  seedComments;