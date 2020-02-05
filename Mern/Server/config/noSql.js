/*
Created By Jitendras On 01-02-2020
*/
let MongoClient = require("mongodb").MongoClient;
let dbConnectionStr = 'mongodb://localhost:27017/entityUser';
let db = {};
/*****************************************************/
exports.getNoSqlDB = async (dbName,collectionName) => {
    try {
        let mongoClient = new MongoClient(dbConnectionStr);
        await mongoClient.connect();
        db = await mongoClient.db(dbName).collection(collectionName);
        if (Object.keys(mongoClient).length !== 0) {
            return db;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
/*****************************************************/