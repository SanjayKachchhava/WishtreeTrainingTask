"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.geocode = void 0;
const request_1 = __importDefault(require("request"));
const geocode = (city, callback) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;
    (0, request_1.default)({ url: url, json: true }, (error, response) => {
        callback(error, response);
    });
};
exports.geocode = geocode;
