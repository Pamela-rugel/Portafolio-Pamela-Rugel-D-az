var DataTypes = require("sequelize").DataTypes;
var _albums = require("./albums");
var _canciones = require("./canciones");
var _cantantes = require("./cantantes");

function initModels(sequelize) {
  var albums = _albums(sequelize, DataTypes);
  var canciones = _canciones(sequelize, DataTypes);
  var cantantes = _cantantes(sequelize, DataTypes);

  canciones.belongsTo(albums, { as: "id_album_album", foreignKey: "id_album"});
  albums.hasMany(canciones, { as: "canciones", foreignKey: "id_album"});
  albums.belongsTo(cantantes, { as: "id_cantante_cantante", foreignKey: "id_cantante"});
  cantantes.hasMany(albums, { as: "albums", foreignKey: "id_cantante"});

  return {
    albums,
    canciones,
    cantantes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
