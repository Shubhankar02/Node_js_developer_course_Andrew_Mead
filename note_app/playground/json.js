// const fs = require('fs');

// const originalNote = {
//     title: 'Some title',
//     body: 'Some body'
// }

// // // Original note string
// // const orgnote = JSON.stringify(originalNote)
// // fs.writeFileSync('notes.json', orgnote);

// const noteString = fs.readFileSync('notes.json')
// const note = JSON.parse(noteString)
// console.log(note);

const unq = [1,2,3, 4,5,6]
return new Set(unq).size === unq.length;
