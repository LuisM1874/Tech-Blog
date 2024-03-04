const router = require('express').Router();
const { User,Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    //Get all commnets and JOIN with user data
    const projectData = await Comments.findAll({
      attributes: ['id', 'title','description','date_created'],
      include: [{ 
        model: User,
        attributes: ['name']
      }] 
    
    }
    );
    // // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
       logged_in: req.session.logged_in,projects
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;