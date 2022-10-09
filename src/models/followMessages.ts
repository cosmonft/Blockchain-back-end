import { DataTypes } from 'sequelize';

export const followMessagesModel = {
        message_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        sent: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        profile_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        FollowNFT: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Timestamp: {
            type: DataTypes.STRING,
            allowNull: true
        }
    };
