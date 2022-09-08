const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('albums', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cantante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cantantes',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_lanzamiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ventas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'albums',
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
        name: "id_cantante",
        using: "BTREE",
        fields: [
          { name: "id_cantante" },
        ]
      },
    ]
  });
};
