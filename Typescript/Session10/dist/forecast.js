"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemp = void 0;
const request_1 = __importDefault(require("request"));
const WHETHER_API_KEY = process.env.WHETHER_API_KEY || "2373050177c1434989f60208230902";
const url = `http://api.weatherapi.com/v1/current.json?key=${WHETHER_API_KEY}`;
const getTemp = ({ lat, lng }, callback) => {
    (0, request_1.default)({ url: `${url}&q=${lat},${lng}`, json: true }, (error, response) => {
        callback(error, response);
    });
};
exports.getTemp = getTemp;
