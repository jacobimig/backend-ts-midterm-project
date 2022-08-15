import { Sequelize } from "sequelize";
import { PetFactory } from "./pets";

const dbName = 'petdb';
const username = 'root';
const password = 'mysql';

const sequelize = new Sequelize(dbName, username, password, {
 host: 'localhost',
 port: 3306,
 dialect: 'mysql'
});

PetFactory(sequelize);

export const db = sequelize;
