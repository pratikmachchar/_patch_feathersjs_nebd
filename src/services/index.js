const po = require('./po/po.service.js');
const underscores = require('./underscores/underscores.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(po);
  app.configure(underscores);
};
