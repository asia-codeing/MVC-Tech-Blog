const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsToMany(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' 
});

Comment.belongsToMany(Post, {
    foreignKey: 'post_id'
});
module.exports = {
    User,
    Post,
    Comment,
};