/*
Created By Jitendras On 01-02-2020
*/

let express = require('express');
let app = express();
let noSqlDb = require('./config/noSql');
let util = require('util')
var port = process.env.PORT || 8080;
let bodyParser = require('body-parser');

app.use(bodyParser.json());

/******************************************************************/
app.get('/', async (req, res) => {
    try {
        let db = await noSqlDb.getNoSqlDB('entityUser', 'userData');
    } catch (error) {
        console.error(error);
        throw error;
    }
    res.send('hello word')
});
/******************************************************************/
// app.post('/updateUserDetails',async(req,res)=>{
//     try {
        
//     } catch (error) {
        
//     }
// })
/******************************************************************/

// for getting data from db
app.get('/getUser', async (req, res) => {
    let resultArr = [];
    console.log(`got the hit.....`)
    try {
        let db = await noSqlDb.getNoSqlDB('entityUser', 'userData');
        await db.find().forEach(document => {
            resultArr.push(document);
        });
        // console.log(`inspect cursor ---> ${util.inspect(cursor)}`)
        res.send(JSON.stringify(resultArr));
    } catch (error) {
        throw error;
    }
});
/******************************************************************/
// for assignment of task to user
app.post('/assignTask', async (req, res) => {
    let resultObj = {};
    try {
        let db = await noSqlDb.getNoSqlDB('entityUser', 'userTask');
    } catch (error) {
        throw error;
    }
});
/******************************************************************/
// for delete user from db
app.post('/deletUser', async (req, res) => {
    // console.log(`check the req ${util.inspect(res.req.body)}`);
    let postParam = {},
        resultObj = {};
    postParam = res.req.body;
    try {
        let db = await noSqlDb.getNoSqlDB('entityUser', 'userData');
        resultObj = await db.deleteOne({
            empId: postParam.userId
        });
        console.log(`check the result ${JSON.stringify(resultObj)}`)
    } catch (error) {
        throw error;
    }
});
/******************************************************************/
// for add user to db
app.post('/addUser', async (req, res) => {
    let postParam = {},
        resultObj = {};
    postParam = res.req.body;
    // console.log(`check the post param ${JSON.stringify(postParam)}`);
    try {
        let db = await noSqlDb.getNoSqlDB('entityUser', 'userData');
        resultObj = await db.insertOne({
            empId: (await db.find({}).count()) + 1,
            firstName: postParam.firstName,
            address: postParam.address,
            emailId: postParam.emailId,
            roleName: postParam.roleName
        });
  
        if (resultObj.insertedCount === 1) {
            res.send({
                message: "Inserted",
                count: 1
            })
        } else {
            res.send({
                message: "Insertion Failed"
            })
        }
    } catch (error) {
        res.send({message:error});
        throw error;
    }
});

/******************************************************************/
app.listen(port, () => {
    console.log(`running on the port ${port}`)
});
/******************************************************************/