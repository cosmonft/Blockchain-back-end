import { Sequelize, DataTypes } from 'sequelize';

export const commentMessagesModel = (initializedSequel: Sequelize) => {
    return initializedSequel.define('comment_messages', {
        messasge_id: {
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
        pub_id: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        content_uri: {
            type: DataTypes.STRING,
            allowNull: true
        },
        profile_id_pointed: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        pub_id_pointed: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        collect_module: {
            type: DataTypes.STRING,
            allowNull: true
        },
        collect_module_return_data: {
            type: DataTypes.STRING,
            allowNull: true
        },
        reference_module: {
            type: DataTypes.STRING,
            allowNull: true
        },
        reference_module_return_data: {
            type: DataTypes.STRING,
            allowNull: true
        },
        timestamp: {
            type: DataTypes.NUMBER,
            allowNull: true
        }
    });
}
