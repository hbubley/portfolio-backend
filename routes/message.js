const express = require('express');
const router = express.Router();
const User = require('../models/Message');

//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post(
    '/', 
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),    
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('name', 'Name is required')
            .not()
            .isEmpty(),

    ],
    (req, res) => {
        res.send(req.body);
    }); 

module.exports = router;

