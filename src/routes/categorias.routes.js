const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('chats.view.ejs',{
        title: "El Jeanky",
        title_interface: "Chats"
    });
})

module.exports = router;