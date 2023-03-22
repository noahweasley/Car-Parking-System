"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api', index_js_1.default);
app.get('/', (req, res) => {
    res.status(200).send('welcome to home page');
});
app.listen(process.env.PORT, () => console.log('server running' + process.env.PORT));
