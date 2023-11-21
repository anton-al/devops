import {createServer, IncomingMessage, ServerResponse} from 'http';
import * as zlib from "zlib";


  export class Server {
    public startServer(){
      createServer(
        (req: IncomingMessage, res: ServerResponse) => {
          console.log(`Got request from ${req.headers['user-agent']} for ${req.url}`);
          res.write("Hello from TS server!");
          res.end();
        }
      ).listen(8080)
      console.log('Server started');
    }
  }
