import handler from '../src/handler';

test('handler should return expected message', async () => {
    expect(handler()).toEqual('Hello world! - Example Service - somePackage');
});

test('nx should fail on  failure', async () => {
    fail('PLEASE EXIT WITH NON ZERO')
});