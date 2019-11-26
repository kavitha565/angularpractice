import { NodupPipe } from './nodup.pipe';

describe('NodupPipe', () => {
  it('create an instance', () => {
    const pipe = new NodupPipe();
    expect(pipe).toBeTruthy();
  });
});
