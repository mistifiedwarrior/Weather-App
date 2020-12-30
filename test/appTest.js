const { assert } = require('chai');
const sinon = require('sinon');
const request = require('../src/request');
const app = require('../src/app');

describe('App Test', () => {
  it('Should give json data of given url', async () => {
    const fakeGetData = () => '{ "location": { "name": "lucknow" } }';
    sinon.replace(request, 'getData', fakeGetData);

    const res = await app('lucknow');
    assert.deepStrictEqual(res, { location: { name: 'lucknow' } });

    sinon.restore();
  });
});
