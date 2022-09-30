const express = require("express");
const studentsController = require("../controller/students.controller");
const router = express.Router();

router.post('/', (studentsController.addStudent))


module.exports = router;