const User = require('../model/user');

const router = (app) => {
  app.get('/', async (req, res) => {
    const { username } = req.query;
    const user = await User.findOne({ uname: username });
    if (user) {
      const { profile_image } = user;
      res.send({ profile_image });
    } else {
      res.status(404).send();
    }
  });
};

module.exports = router;
