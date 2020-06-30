import { createTestClient } from 'apollo-server-testing';

// Subject under test
import server from '../server';

describe('Server integration test', () => {
    describe('Query', () => {
        it('returns "Hello world!"', async () => {
            const { query } = createTestClient(server);

            const res = await query({
                query: 'query { hello }',
            });
            expect(res.data.hello).toEqual('Hello world!');
        });
    });
});
