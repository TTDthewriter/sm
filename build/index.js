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
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const port = 3000;
const app = (0, express_1.default)();
function sunswap() {
    return __awaiter(this, void 0, void 0, function* () {
        let sunswapData = 'https://openapi.sun.io/v2/allpairs?page_size=500&page_num=0&ver=3&token_address=TRXuDwR9EYWwindMPx8yveAcaDTR3Z3XXz';
        let response = yield (0, node_fetch_1.default)(sunswapData, { method: 'GET' });
        let data = JSON.parse(yield response.text());
        return data;
    });
}
app.get('/price', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let price = yield sunswap();
    res.send(price);
}));
app.listen(port, () => console.log(`Server is live on port ${port}`));
