"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const slugController_1 = require("./controllers/slugController");
const sockets_1 = require("./sockets");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const port = 9000;
app.use((0, cors_1.default)());
(0, sockets_1.initSocket)(server);
app.get('/slug', (req, res, next) => {
    (0, slugController_1.createSlug)(req, res, next).then();
});
app.get('/test', (_, res) => {
    res.send('This works. Awesome! 😎');
});
server.listen(port, () => {
    // eslint-disable-next-line no-console
    return console.log(`Express app running on: http://localhost:${port} 🚀🔥👍`);
});
//# sourceMappingURL=server.js.map