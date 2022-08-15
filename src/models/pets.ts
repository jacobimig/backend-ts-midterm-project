import { InferAttributes, InferCreationAttributes, Model, DataTypes, Sequelize } from "sequelize";

export class Pets extends Model<InferAttributes<Pets>, InferCreationAttributes<Pets>>{
 declare id: number;
 declare name: string;
 declare description: string;
 declare imgUrl: string;
 declare cutenessLevel: number;
 declare createdOn?: Date;
 declare updatedOn?: Date;
}

export function PetFactory(sequelize: Sequelize) {
 Pets.init({
  id: {
   type: DataTypes.INTEGER,
   autoIncrement: true,
   primaryKey: true,
   allowNull: false
  },
  name: {
   type: DataTypes.STRING,
   allowNull: false
  },
  description: {
   type: DataTypes.STRING,
   allowNull: false
  },
  imgUrl: {
   type: DataTypes.STRING,
   allowNull: false
  },
  cutenessLevel: {
   type: DataTypes.INTEGER
  },
  createdOn: {
   type: DataTypes.DATE,
   allowNull: false,
   defaultValue: DataTypes.NOW
  },
  updatedOn: {
   type: DataTypes.DATE,
   allowNull: false,
   defaultValue: DataTypes.NOW
  }
 }, {
  freezeTableName: true,
  tableName: 'pets',
  sequelize
 });
}