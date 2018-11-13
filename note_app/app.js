const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

 
const argv = yargs.argv;  
// console.log('Process:', process.argv);
// console.log('Yargs', argv);
const command = process.argv[2]
if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    note = notes.readNote(argv.title)
    note.length > 0 ? console.log(`Note found \ntitle: ${note[0].title} \nbody: ${note[0].body}`) : console.log('Note not found');
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognize');
}