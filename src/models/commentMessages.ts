import { Sequelize, DataTypes } from 'sequelize';

export const commentMessagesModel = (initializedSequel: Sequelize) => {
    return initializedSequel.define('comment_messages', {
        MessageID: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        ProfileId: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        FollowNFT: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Timestamp: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    });
}
