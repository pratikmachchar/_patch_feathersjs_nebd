const assert = require('assert');
const app = require('../../src/app');

describe('\'po\' service', () => {
  it('registered the service', () => {
    const service = app.service('po');

    assert.ok(service, 'Registered the service');
  });
});
