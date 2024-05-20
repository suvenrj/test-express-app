"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello, Express with TypeScript!');
});
app.post('/query', (req, res) => {
    // Access the data sent from the client in the request body
    const requestData = req.body;
    if (typeof requestData.query == 'string' && requestData.query.includes("show")) {
        res.status(200).json({ verdict: 'show' });
    }
    else if (typeof requestData.query == 'string' && requestData.query.includes("hide")) {
        res.status(200).json({ verdict: 'hide' });
    }
    else {
        res.status(200).json({ verdict: 'none' });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
