const router = require('express').Router();
const service = require('../services/user.service');
const jwt = require('jsonwebtoken');
const verify = require('../services/verifyJwt.service');
router.get('/', async (req, res) => {
    try {
        let token = jwt.sign({
            'user': 'test_user'
        }, process.env.JWT_SECRET);
        res.header('auth', token).send(token);
    } catch (error) {
        console.error(error);
        throw error();
    }
});
/******************************************************************/
// for getting data from db
router.get('/getUser', verify.auth, async (req, res) => {
    try {
        let result = await service.getUserData(req.body);
        res.send(result);
    } catch (error) {
        res.status(500).send('Error while retriving the response')
    }
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