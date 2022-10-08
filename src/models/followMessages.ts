import { Sequelize, DataTypes } from 'sequelize';

export const followMessagesModel = (initializedSequel: Sequelize) => {
    return initializedSequel.define('follow_messages', {
        MessageID: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        Sent: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, 
        ProfileId: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        PubId: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        ContentURI: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ProfileIdPointed: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        PubIdPointed: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        CollectModule: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CollectModuleReturnData: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ReferenceModule: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ReferenceModuleReturnData: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Timestamp: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    });
}
