import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {

    const peopleList = executeArray();

    res.json(peopleList);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

interface Person {
    name: string;
    age: number;
    lottos: number[];
    numberOfLottos: number;

}

function executeArray(): Person[] {

    console.log("[executeArray]");

    let peopleList: Person[] = [];

    let numOfPeople: number;

    numOfPeople = 10;

    // create 10 people
    peopleList = createPeople(numOfPeople);


    // generate lotto based on random number of lottos

    peopleList = generateLotto(peopleList);


    console.log(peopleList);

    // create person array object basefd on numOfPerson
    return peopleList;
}

function createPeople(peopleNo: number): Person[] {

    console.log("[createPeople]");

    const peopleList: Person[] = [];

    for (let i = 0; i < peopleNo; i++) {
        const person: Person = {
            name: "a" + i,
            age: randomNumber(60),
            lottos: [],
            numberOfLottos: randomNumber(10),

        }

        peopleList.push(person);

    }

    return peopleList;
}

function generateLotto(peopleList: Person[]): Person[] {

    for (let i = 0; i < peopleList.length; i++) {

        for (let j = 0; j < peopleList[i].numberOfLottos; j++) {

            peopleList[i].lottos.push(randomNumber(99));
        }


    }
    return peopleList;
}

function randomNumber(range: number): number {

    console.log("[randomNumber]");
    const ranNumber = Math.floor(Math.random() * range) + 1;

    return ranNumber;
}