const express = require("express");
const studentsController = require("../controller/students.controller");
const router = express.Router();

router.post('/', (studentsController.addStudent))
router.get('/', studentsController.saveStudent)
router.delete('/:id', studentsController.deleteStudent)


module.exports = router;