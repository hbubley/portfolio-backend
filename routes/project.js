const express = require('express');
const router = express.Router();

//@route    GET api/projects
//@desc     Get all projects
//@access   Public
router.get('/', (req, res) => {
    res.send('Get all projects');
}); 

//@route    POST api/projects
//@desc     Add new project
//@access   Private
router.post('/', (req, res) => {
    res.send('Add project ');
}); 

//@route    PUT api/projects/:id
//@desc     Update project
//@access   Private
router.put('/:id', (req, res) => {
    res.send('Update Project');
}); 

//@route    DELETE api/projects/:id
//@desc     Delete project
//@access   Private
router.delete('/:id', (req, res) => {
    res.send('Delete Project');
}); 




module.exports = router;