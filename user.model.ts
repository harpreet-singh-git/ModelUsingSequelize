import { Sequelize,Op, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

const sequelize = new Sequelize('mysql://root:asd123@localhost:3306/mySequelizedb');

interface PersonModel extends Model<InferAttributes<PersonModel>, InferCreationAttributes<PersonModel>> {
// create interface for strict type checking

    id: CreationOptional<number>;
    name: string;
    accountType: string;
    address: string;
    drive: string;
    salary: string;
    vehicle: string;
    studentNumber: string;
    createOn: string;
    createdBy: string;
    updateOn: string;
    
}

const person = sequelize.define<PersonModel>('Person', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
    },
    name: {
        type: DataTypes.STRING(50),
        required: true,
        allowNull: false,
    },
    accountType: {
        type: DataTypes.ENUM,
        values: ['student', 'professor']
    },
    // we can take as street,city,country in an object
    address: {
        type: DataTypes.JSONB,
        required: true,
        allowNull: false,
    },
    studentNumber: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: false,
    },
    // we can take as distance,date in an object
    drive: {
        type: DataTypes.JSONB,
        required: true,
        allowNull: false,
    },
    // we can take as street,city,country in an object
    vehicle: {
        type: DataTypes.UUID,
        required: true,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.STRING(100),
        required: true,
        allowNull: false,
    },
    createOn: {
        type: DataTypes.BIGINT,
        required: true,
        allowNull: false,
    },
    updateOn: {
        type: DataTypes.BIGINT,
        required: true,
        allowNull: false,
    },
}, {
    timestamps: false,
    setterMethods: {
        accountType(value: any) {
            if (value === "student") {
                this.setDataValue('studentNumber', value);
            }
            this.setDataValue('salary', value);
        }
    }
});

{
    indexes: [
        {
            unique: false,
            fields: ['name']
        }
    ]
}

export default person;