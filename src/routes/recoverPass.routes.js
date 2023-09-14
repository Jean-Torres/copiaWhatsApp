const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('recover.view.ejs',{
        title: "Recover"
    });
})

router.put('/', (req, res)=> {
    res.render('Recover.view.ejs', {
        title: "Recover"
    });
})

module.exports = router;