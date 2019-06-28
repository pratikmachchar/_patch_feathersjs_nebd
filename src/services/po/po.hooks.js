

const beforePoPatch = require('../../hooks/before_po_patch');

module.exports = {
  before: {
    all: [],
    find: [()=>{console.log("Before Find")}],
    get: [],
    create: [],
    update: [],
    patch: [beforePoPatch()],
    remove: []
  },

  after: {
    all: [],
    find: [()=>{console.log("After Find")}],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
