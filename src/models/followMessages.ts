import { Sequelize, DataTypes } from 'sequelize';

export const followMessagesModel = (initializedSequel: Sequelize) => {
    return initializedSequel.define('follow_messages', {
        message_id: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        sent: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        profile_id: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        FollowNFT: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Timestamp: {
            type: DataTypes.NUMBER,
            allowNull: true
        }
    });
}
