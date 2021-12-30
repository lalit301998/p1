'use strict';

 module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     
     //* add seed commands here
    // * Example:
     await queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email:'example@example.com',
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});
    
   },

  down: async (queryInterface, Sequelize) => {
    
      //Add commands to revert seed here.
     
      Example:
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
