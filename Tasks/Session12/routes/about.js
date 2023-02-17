const router = require('express').Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
});

router.get('/jash',(req, res) => {
    res.send("welcome to Jash's ")
})

module.exports = router;
