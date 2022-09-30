const { getDb } = require("../utils/dbConnect");

module.exports.addStudent = async (req, res) => {
    try {
        const db = getDb();
        const students = req.body;
        const result = await db.collection("student").insertOne(students);
        res.send(result)
    } catch (error) {

    }
}