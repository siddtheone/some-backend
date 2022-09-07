const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get('/', (req, res) => {
    res.render('./index');
  });

  app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thank you');
    console.log(req.body.firstname, req.body.lastname);
  });
};
