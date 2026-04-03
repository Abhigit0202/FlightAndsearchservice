'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Airports', [
        {
          name: 'O Hare International Airport',
          cityId: 25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Logan International Airport',
          cityId: 26,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Haneda Airport',
          cityId: 27,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Una Airport',
          cityId: 28,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kullu Manali Airport',
          cityId: 29,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Indira Gandhi International Airport',
          cityId: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Oslo Gardermoen Airport',
          cityId: 31,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sheremetyevo International Airport',
          cityId: 32,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'San Francisco International Airport',
          cityId: 33,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chhatrapati Shivaji Maharaj International Airport',
          cityId: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kempegowda International Airport',
          cityId: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mangalore International Airport',
          cityId: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
