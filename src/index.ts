import { httpServer } from './server/httpServer';
import { env } from 'process';

const HTTP_PORT = Number(env.HTTP_PORT) || 8181;

httpServer.listen(HTTP_PORT);
console.log(`Http server is listening on http://localhost:${HTTP_PORT}`);
