const assert = require('assert');
const app = require('../../src/app');

describe('\'underscorePatch\' service', () => {
  it('registered the service', () => {
    const service = app.service('underscore-patch');

    assert.ok(service, 'Registered the service');
  });
});
