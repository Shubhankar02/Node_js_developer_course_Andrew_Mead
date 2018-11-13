const fs = require('fs');


// Fetching note
const fetchNotes = () => {
    try {
        const noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

// Save notes
const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    const notes = fetchNotes();
    const note = {
        title: title,
        body: body
    };
    const duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        console.log('New Note added');
        return note; // In future to scalability
    } else {
        console.log('The title already exist');
    }
};

const getAll = () => {
    return fetchNotes()
};

const readNote = (title) => {
    console.log('Reading note', title);
};

const removeNote = (title) => {
    // fetch the note -  we have to read/get the note first
    const notes = fetchNotes();
    // Filter out which note to be remove passed in the arguments
    const filteredNotes = notes.filter((note) => note.title !== title);
    // save the new array
    saveNotes(filteredNotes);
    // Checking if notes are removed or not
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};