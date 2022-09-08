const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('canciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_album: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'albums',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    duracion: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'canciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: false,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_album",
        using: "BTREE",
        fields: [
          { name: "id_album" },
        ]
      },
    ]
  });
};
