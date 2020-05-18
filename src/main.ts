import fs from 'fs';

function main(mapfile: string = process.argc[2]){
    const myMap = readFileSync(mapfile, 'utf8').split('\n')
    
}