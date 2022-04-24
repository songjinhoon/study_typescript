import {readFileSync, readFile} from 'fs';

/* synchronous api */
const buffer: Buffer = readFileSync('./package.json'); // 동기처리이기 때문에 이 시점에 프로세스가 멈추겠지.
const content: string = buffer.toString();
console.log(content);

/* asynchronous api */
readFile('./package.json', (error: Error, buffer: Buffer) => {
    if (error) 
        throw error;
    else 
        console.log(buffer.toString());        
});

/* callback hell */
readFile('./package.json', (error: Error, buffer: Buffer) => {
    if (error) 
        throw error;
    else 
        console.log(buffer.toString());        
        readFile('./package.json', (error: Error, buffer: Buffer) => {
            if (error) 
                throw error;
            else 
                console.log(buffer.toString());        
        });
});

const readFilePromise = (filename: string): Promise<string> => 
    new Promise<string>((resolve, reject) => {
        readFile(filename, (error: Error, buffer: Buffer) => {
            if(error) 
                reject(error);
            else
                resolve(buffer.toString());
        });
    });

(async () => {
    const content = await readFilePromise('./package.json');
    console.log('read package.json using Pormise and async/await');
    console.log(content);
})();