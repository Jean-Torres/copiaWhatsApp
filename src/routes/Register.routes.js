const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('register.view.ejs',{
        title: "New User"
    });
})

router.post('/', (req, res)=> {
    res.render('register.view.ejs', {
        title: "New User"
    });
})

module.exports = router;