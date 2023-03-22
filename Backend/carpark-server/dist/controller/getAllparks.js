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
const getAllparks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { available } = req.params;
    console.log(available);
    let parks;
    try {
        if (available === "available") {
            parks = yield index_js_1.default.query(`SELECT * FROM parkingspaces where available > 0`);
        }
        else {
            parks = yield index_js_1.default.query(`SELECT * FROM parkingspaces`);
        }
        res.status(200).json({ result: parks.rows });
    }
    catch (err) {
        console.log(err);
    }
    return res.status(500);
});
exports.default = getAllparks;
