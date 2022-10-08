import { Sequelize, DataTypes } from 'sequelize';

export const userModel = (initializedSequel: Sequelize) => {
    return initializedSequel.define('User', {
        ID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}
