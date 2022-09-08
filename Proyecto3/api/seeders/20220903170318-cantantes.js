'use strict';
var musicalGenre = ['country', 'electronic', 'hiphop', 'jazz', 'pop', 'rock', 'soul', 'funk', 'reggaeton'];
var url = ["../../assets/hombre.jpg","../../assets/mujer.jpg"];
/*var dummyJSON = [];

for (let i = 1; i <=1000; i++) {  
  let rand1= Math.floor(Math.random()*musicalGenre.length);
  let rand2 = Math.floor(Math.random()*url.length);
  let min = Math.ceil(18);
  let max = Math.floor(80);
  dummyJSON.push({
    nombre: 'Artist '+i,  
    pais: "Country "+i,
    edad: Math.floor(Math.random() * (max - min + 1) + min),  
    genero: musicalGenre[rand1],
    img: url[rand2]
  });
}*/

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 1; i <=125; i++) {  
      let rand1= Math.floor(Math.random()*musicalGenre.length);
      let rand2 = Math.floor(Math.random()*url.length);
      let min = Math.ceil(18);
      let max = Math.floor(80);
        await queryInterface.bulkInsert('Cantantes', [{  
          id: i,
          nombre: 'Artist '+i,  
          pais: "Country "+i,
          edad: Math.floor(Math.random() * (max - min + 1) + min),  
          genero: musicalGenre[rand1],
          img: url[rand2]
        }], {}); 
      }
  }
  ,

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cantantes', null, {});
  }
};
