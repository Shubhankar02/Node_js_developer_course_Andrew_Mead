console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	try {
		var noteString = fs.readFileSync('note-data.json');
		notes = JSON.parse(noteString);		
	} catch (error) {
		
	}

	notes.push(note)
	fs.writeFileSync('note-data.json', JSON.stringify(notes))
};

var getAllNote = () => {
	console.log('Getting all notes');
};

var getNote = (title) => {
	console.log('Getting note', title);
};

var removeNote = (title) => {
	console.log('Removing note', title);
};

module.exports = {
	addNote,
	getAllNote,
	getNote,
	removeNote
};