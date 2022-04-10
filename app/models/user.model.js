const db = require("../models");
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
      'user',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING(60),
          allowNull: false
        },
        email: {
          type: DataTypes.STRING(60),
          allowNull: false
        },
        clientId: {
          type: DataTypes.UUID,
          allowNull: false
        },
        country: {
          type: DataTypes.STRING(60),
          allowNull: false
        },
        timezone: {
          type: DataTypes.STRING(60),
          allowNull: false
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false
        }
      },
      {
        freezeTableName: true
      }
    )
    return user
  }