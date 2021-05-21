const { User } = require('../models');

const userData = [
    {
      username: "Sal",
      password: "password12345"
    },
    {
      username: "Lernantino",
      password: "password12345"
    },
    {
      username: "Amiko",
      password: "password12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;