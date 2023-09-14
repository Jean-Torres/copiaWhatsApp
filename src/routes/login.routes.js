const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('login.view.ejs',{
        title: "Login"
    });
})

module.exports = router;