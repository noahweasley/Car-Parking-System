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
const getPark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { park } = req.query;
    let data;
    try {
        data = yield index_js_1.default.query(`SELECT * FROM parkingspaces where spaceName = $1`, [park]);
        if (data.rowCount > 0) {
            console.log(data.rowCount, 'rowcount');
            return res.status(200).json({
                result: data.rows,
            });
        }
    }
    catch (err) {
        if (err) {
            console.log(err);
        }
    }
    res.status(500);
});
exports.default = getPark;
