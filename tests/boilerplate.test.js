/* eslint-disable no-undef */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const { ItemDSTLD, close } = require('../db/index.js');

describe('Database', () => {
  it('should retrieve an item from DSTLD database', async () => {
    const item = await ItemDSTLD.findOne({ _id: (Math.floor(Math.random() * Math.floor(100))) });
    expect(typeof item).toEqual('object');
  });
  it('item should contain correct information', async () => {
    const item = await ItemDSTLD.findOne({ _id: (Math.floor(Math.random() * Math.floor(100))) });
    expect(item.sizeGuideUSA[0]).toContain('SIZE');
  });
});

afterAll(async (done) => {
  await close();
  done();
});
