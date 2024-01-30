import somePackage from '../src/some-package';

test('handler should return expected message', async () => {
    expect(somePackage()).toEqual('somePackage');
});