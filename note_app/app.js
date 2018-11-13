const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

 
const argv = yargs
.command('add', 'Add a new note', {
    title : {
        describe : 'Title of the note',
        demand : true,
        alias : 't'
    },
    body : {
        describe : 'Text you want to add',
        demand : true,
        alias : 'b'
    }
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title : {
        describe : 'Title of the note',
        demand : true,
        alias : 're'
    }
})
.command('remove', 'Remove the note', {
    title : {
        describe : 'Title of the note',
        demand : true,
        alias : 'rm'
    }
})
.help()
.argv;  


const command = argv._[0]
if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach(note => {
        console.log(note)
    });
} else if (command === 'read') {
    notes.readNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognize');
}