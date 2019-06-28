// Initializes the `underscores` service on path `/underscores`
const createService = require('./underscores.class.js');
const hooks = require('./underscores.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/underscores', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('underscores');

  service.hooks(hooks);
};
