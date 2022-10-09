import { DataTypes } from 'sequelize';

export const userModel = {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false 
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
