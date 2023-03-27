'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('animals', 'imageUrl', {
      type: Sequelize.STRING})

      await queryInterface.addColumn('food', 'imageUrl', {
        type: Sequelize.STRING})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('animals', 'imageUrl');
    await queryInterface.removeColumn('food', 'imageUrl');
  }
};
