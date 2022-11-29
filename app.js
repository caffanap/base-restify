import { createServer, plugins } from "restify";
import config from "./config.js";
import router from "./src/router/index.js";
// import mongodb from "./src/library/mongodb";


const server = createServer()
server.name = config.APP_NAME

server.pre(config.CORS.preflight)
server.use(config.CORS.actual)
server.use(plugins.jsonBodyParser({ mapParams: true }))
server.use(plugins.acceptParser(server.acceptable))
server.use(plugins.queryParser({ mapParams: true }))
server.use(plugins.fullResponse())

router.applyRoutes(server)

server.listen(config.APP_PORT, () => {
    // mongodb.dbInitialize()
    console.log(`Server Running in ${server.url}`);
})