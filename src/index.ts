import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


function executeArray(): string {

    interface Person {
        name: string;
        age: number;
        lottos: number[];
        numberOfLottos: number;

    }

    let numOfPerson: number;

    numOfPerson = 10;

    // create person array object basefd on numOfPerson
    return "";
}