const router = require('express').Router();
const service = require('../services/user.service');

router.get('/', async (req, res) => {
    try {
        let result = service.getUserData(req.body);
        res.send(result);
    } catch (error) {
        console.error(error);
        throw error();
    }
    // res.send('hello word')
});
/******************************************************************/
// for getting data from db
router.get('/getUser', async (req, res) => {

});
/******************************************************************/
// for assignment of task to user
router.post('/assignTask', async (req, res) => {
    let resultObj = {};
    try {
        let db = await noSqlDb.getNoSqlDB('entityUser', 'userTask');
    } catch (error) {
        throw error;
    }
});
/******************************************************************/
// for delete user from db
router.post('/deletUser', async (req, res) => {
    // console.log(`check the req ${util.inspect(res.req.body)}`);

});
/******************************************************************/
// for add user to db
router.post('/addUser', async (req, res) => {
    try {
        let result = service.addUserDtls();
    } catch (error) {
        console.error();
        throw error;
    }
});

module.exports = router;