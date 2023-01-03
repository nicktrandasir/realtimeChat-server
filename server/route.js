const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Запрос гет есть!");
});

module.exports = router;