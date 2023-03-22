"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../db/index.js"));
const bookpark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, park, username } = req.query;
    const date = new Date().toLocaleString();
    console.log(id);
    let data1, data2;
    try {
        data1 = yield index_js_1.default.query(`INSERT INTO users(username, email, bookedSpace, timestamp) VALUES($1,$2,$3,$4)`, [username, id, park, date]);
        data2 = yield index_js_1.default.query(`UPDATE parkingspaces SET available = available - 1 WHERE spacename = $1 AND available > 1`, [park]);
        console.log(data1);
        console.log(data2);
        return res.status(204).json({ result: 'success' });
    }
    catch (err) {
        if (err) {
            console.log(err);
        }
    }
    return res.status(500);
});
exports.default = bookpark;
