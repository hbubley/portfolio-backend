const express = require('express');
const router = express.Router();

//@route    GET api/reaction
//@desc     Post a like
//@access   Public
router.post('/:id', (req, res) => {
    res.send('like');
}); 

//@route    POST api/reaction
//@desc     Post a comment
//@access   Private
router.post('/:id', (req, res) => {
    res.send('Leave a comment || critique');
}); 

module.exports = router;

