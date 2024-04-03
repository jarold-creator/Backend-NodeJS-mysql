import { Sequelize } from "sequelize";

const connDB = new Sequelize('db_citas','root','',{
    host:'localhost',
    dialect:'mysql'
});

export default connDB;