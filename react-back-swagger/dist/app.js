"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config/config"));
const videos_routes_1 = __importDefault(require("./routes/videos.routes"));
const app = express_1.default();
app.set('port', config_1.default.PORT);
// MIDDLEWARES //
//loggers http
app.use(morgan_1.default(config_1.default.enviroment));
// cruzar servers
app.use(cors_1.default());
// parse json
app.use(express_1.default.json());
// enviar datos codificacion en uri
app.use(express_1.default.urlencoded({ extended: false }));
// routes
app.use(videos_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map