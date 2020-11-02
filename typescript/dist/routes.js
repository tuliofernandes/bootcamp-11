"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'Túlio',
        email: 'tuliomf09@gmail.com',
        password: 'minti4',
        techs: ['React', { title: 'Node', experience: 90 }]
    });
    return response.json({ user: user });
}
exports.helloWorld = helloWorld;
