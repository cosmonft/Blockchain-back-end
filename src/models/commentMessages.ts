import { DataTypes } from 'sequelize';

export const commentMessagesModel = {
        messasge_id: {
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
        pub_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content_uri: {
            type: DataTypes.STRING,
            allowNull: true
        },
        profile_id_pointed: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pub_id_pointed: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            allowNull: true
        }
    };
