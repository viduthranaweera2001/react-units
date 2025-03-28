// const extra = require('./extra');
// console.log(extra.text);

import {text,hello} from "./extra.js";
import {readFile} from 'fs/promises';

console.log(text);
console.log('Test log from index.js');

async function txtFile(){
    var data = await readFile('./sample.txt','utf8');
    console.log(data);
}

txtFile();