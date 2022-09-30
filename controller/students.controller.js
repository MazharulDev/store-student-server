const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

module.exports.addStudent = async (req, res) => {
    try {
        const db = getDb();
        const students = req.body;
        const result = await db.collection("student").insertOne(students);
        res.send(result)
    } catch (error) {

    }
};
module.exports.getStudent = async (req, res) => {
    try {
        const db = getDb();
        const student = await db.collection("student").find().toArray();
        res.send(student)
    } catch (error) {

    }
}
module.exports.deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const db = getDb()
        const query = { _id: ObjectId(id) };
        const result = db.collection("student").deleteOne(query);
        res.send(result);
    } catch (error) {

    }
}
module.exports.getSingleStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const db = getDb();
        const query = { _id: ObjectId(id) };
        const result = await db.collection("student").findOne(query)
        res.send(result)
    } catch (error) {

    }
}
module.exports.updateInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const db = getDb();
        const students = req.body;
        const filter = { _id: ObjectId(id) };
        const options = { upsert: true };
        const updateInfo = {
            $set: students,
        };
        const result = await db.collection("student").updateOne(filter, updateInfo, options);

        res.send(result);
    } catch (error) {

    }

}