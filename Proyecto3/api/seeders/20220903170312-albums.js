'use strict';
/*var dummyJSON = [];
for (let i = 1; i <=1000; i++) { 
  for (let j = 0; j <6; i++) {  
    let min = Math.ceil(10000);
    let max = Math.floor(9999999);
    dummyJSON.push({
      id_cantante: i,  
      nombre: 'Album '+i,  
      fecha_lanzamiento: new Date()  ,
      ventas:  Math.floor(Math.random() * (max - min + 1) + min),
      img: "../../assets/album.jpg"
    }); 
  }
} 
*/
module.exports = {

  async up (queryInterface, Sequelize) {
    let num = 0;
    for (let i = 1; i <=125; i++) { 
      for (let j = 0; j <4; j++) {  
        num++
        let min = Math.ceil(10000);
        let max = Math.floor(9999999);
        await queryInterface.bulkInsert('Albums', [{  
          id: num,
          id_cantante: i,  
          nombre: 'Album '+ num,  
          fecha_lanzamiento: new Date()  ,
          ventas: Math.floor(Math.random() * (max - min + 1) + min),
          img: "../../assets/album.jpg"
        }], {});  
      }
   } 
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Albums', null, {});

  }
};
