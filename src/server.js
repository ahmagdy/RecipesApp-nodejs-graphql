import app from './app'
import config from './config'
import http from 'http'


const server = http.createServer(app);

server.listen(config.portNumber,()=> console.log(`Server is listening on PORT ${config.portNumber}`))