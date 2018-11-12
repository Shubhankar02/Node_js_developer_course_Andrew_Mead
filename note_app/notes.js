console.log('Starting note.js');

const addNote = (title, body) => {
    console.log('Adding note', title, body);
}

const getAll = () => {
    console.log('Getting all note');
}

const readNote = (title) => {
    console.log('Reading note', title);
}

const removeNote = (title) => {
    console.log('Note removed', title);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};
