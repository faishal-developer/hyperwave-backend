"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateRefreashToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const generateAccessToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, config_1.default.jwt.secret, {
        expiresIn: config_1.default.jwt.expires_in,
    });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreashToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, config_1.default.jwt.refresh_secret, {
        expiresIn: config_1.default.jwt.refresh_expires_in,
    });
};
exports.generateRefreashToken = generateRefreashToken;
const verifyAccessToken = (token) => {
    return jsonwebtoken_1.default.verify(token, config_1.default.jwt.secret);
};
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = (token) => {
    return jsonwebtoken_1.default.verify(token, config_1.default.jwt.refresh_secret);
};
exports.verifyRefreshToken = verifyRefreshToken;
