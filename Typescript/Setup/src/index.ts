import express,{Application,Request,Response} from 'express';

console.log('typescript is running');

const app : Application = express();
const port : number = process.env.PORT?parseInt(process.env.PORT):undefined || 5000;

app.get('/', (req : Request, res : Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`typescript is listening on port ${port}`);
});