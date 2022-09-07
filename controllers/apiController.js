module.exports = function (app) {
  app.get('/api/person/:id', (req, res) => {
    res.render('./person', { ID: req.params.id, Qstr: req.query.qstr });
  });
};
