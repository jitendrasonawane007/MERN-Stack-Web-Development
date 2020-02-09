let noSqlDb = require("../config/noSql");

/*******************************************************************/
exports.getUserData = async () => {
    try {
        let resultArr = [];
        try {
            let db = await noSqlDb.getNoSqlDB("entityUser", "userData");
            await db.find().forEach(document => {
                resultArr.push(document);
            });
            return resultArr;
        } catch (error) {
            console.error(error)
            throw error;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
/*******************************************************************/
exports.deleteUser = async () => {
    try {
        let postParam = {},
            resultObj = {};
        postParam = res.req.body;
        try {
            let db = await noSqlDb.getNoSqlDB("entityUser", "userData");
            resultObj = await db.deleteOne({
                empId: postParam.userId
            });
        } catch (error) {
            throw error;
        }
    } catch (error) {
        console.error();
    }
};
/*******************************************************************/
exports.addUserDtls = async () => {
    try {
        let postParam = {},
            resultObj = {};
        postParam = res.req.body;
        try {
            let db = await noSqlDb.getNoSqlDB("entityUser", "userData");
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
                });
            } else {
                res.send({
                    message: "Insertion Failed"
                });
            }
        } catch (error) {
            res.send({
                message: error
            });
            throw error;
        }
    } catch (error) {}
};