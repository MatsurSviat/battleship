import wsServer from './server/wsServer';
import { httpServer } from './server/httpServer';
import { env } from 'process';

const HTTP_PORT = Number(env.HTTP_PORT) || 8181;
const WEBSOCKET_PORT = Number(env.WS_PORT) || 3000;

httpServer.listen(HTTP_PORT);
console.log(`Http server is listening on http://localhost:${HTTP_PORT}`);

wsServer.listen(WEBSOCKET_PORT);
console.log(`Websocket server is listening on ws://localhost:${WEBSOCKET_PORT}`);
