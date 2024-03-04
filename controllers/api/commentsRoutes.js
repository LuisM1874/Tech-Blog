const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');
// post request came from the front end to the server to create a node instances 
router.post('/', async (req, res) => {
  console.log( req.session.user_id)
  try {
  
    const newComments= await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });
 console.log(newComments)
    res.status(200).json(newComments);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;