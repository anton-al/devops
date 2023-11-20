class Server {
    port;
    address;
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    startServer() {
        console.log(`Server started at ${this.address}:${this.port}`);
    }
}
const someServer = new Server(8080, '127.0.0.1');
someServer.startServer();
