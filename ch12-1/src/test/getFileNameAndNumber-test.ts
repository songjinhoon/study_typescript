import { getFileNameAndNumber } from "../utils/getFileNameAndNumber";

const [filename, numberOFFakeItems] = getFileNameAndNumber('data/fake.csv', 100000);
console.log(filename, numberOFFakeItems);