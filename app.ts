import express, { Request, Response } from 'express';
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.post('/query', (req: Request, res: Response) => {
    // Access the data sent from the client in the request body
    const requestData = req.body;
    if (typeof requestData.query == 'string' && requestData.query.includes("show")){
        res.status(200).json({ verdict: 'show' });
    }
    else if (typeof requestData.query == 'string' && requestData.query.includes("hide")){
        res.status(200).json({ verdict: 'hide' });
    }
    else{
        res.status(200).json({ verdict: 'none' });
    }
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
