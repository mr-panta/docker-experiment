const User = require('../model/user');

const router = (app) => {
  app.get('/', (req, res) => {
    User.findOne({ uname: req.query.username }).then(user => {
      if (user) {
        res.send({ profile_image: user.profile_image });
      } else {
        res.status(404).send();
      }
    }).catch(err => {
      console.warn(err);
      res.status(404).send();
    });
  });
};

module.exports = router;
