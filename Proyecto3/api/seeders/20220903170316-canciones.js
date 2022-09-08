'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    let num = 0;
    for (let i = 1; i <=500; i++) {  
      for (let j = 1; j <10; j++) { 
        num++
        await queryInterface.bulkInsert('Canciones', [{  
          id: num,
          id_album: i,  
          nombre:  'Song ' + num,
          duracion: '00:03:00',
        }], {}); 
      }
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Canciones', null, {});
  }
};
