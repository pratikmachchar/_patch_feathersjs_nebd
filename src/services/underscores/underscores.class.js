/* eslint-disable no-unused-vars */
class Service {
  setup (app) { this.app = app; }
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
   // let result = await this.app.service('po')._find("bbyphADEt7RMIHqJ")//, { balance: 450});
   let result = await   this.app.service('po')._find({ query: {_id: "bbyphADEt7RMIHqJ"} });
   console.log("Find Result"+JSON.stringify(result.data))
 
//    result = await this.app.service('po')._patch(["bbyphADEt7RMIHqJ", { balance: 450}]);

  this.emit('customEvent', {
      type: 'customEventpatch',
      data: data
    });
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
