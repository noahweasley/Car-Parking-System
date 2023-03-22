"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllparks_js_1 = __importDefault(require("../controller/getAllparks.js"));
const getPark_js_1 = __importDefault(require("../controller/getPark.js"));
const bookpark_js_1 = __importDefault(require("../controller/bookpark.js"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/car-parks', getAllparks_js_1.default);
router.get('/car-park', getPark_js_1.default);
router.get('/:available', getAllparks_js_1.default);
router.patch('/book-park', bookpark_js_1.default);
exports.default = router;
