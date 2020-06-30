import server from './server';

server
    .listen()
    .then(({ url }: { url: string }): void =>
        console.log('Server started at: ' + url)
    );

export default server;
