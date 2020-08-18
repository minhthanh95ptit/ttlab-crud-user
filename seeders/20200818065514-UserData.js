'use strict';

const faker = require('faker');
const randomBirthday = require('random-birthday');

module.exports = {
  up: (queryInterface, Sequelize) => {
      let data = [];
      let amount = 100;

      while(amount--){

        let date = new Date();
        data.push({
          id: faker.random.number(),
          username: faker.internet.userName(),
          password: faker.internet.password(),
          fullName: faker.name.findName(),
          birthDay: randomBirthday({ min: 1980, max: 2000 }),
          gender: faker.random.arrayElement([true, false]),
          createdAt: date,
          updatedAt: date
        });
      }

      return queryInterface.bulkInsert('users', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
