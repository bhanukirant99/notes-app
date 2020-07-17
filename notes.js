const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    try {
        const loadedNotes = fs.readFileSync('notes.json');
        const notesJSON = loadedNotes.toString();
        return JSON.parse(notesJSON);
    } catch {
        return [];
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added successfully'));
    } else {
        console.log(chalk.bgRed('Note title taken!, try alternate title'));
    }    
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const remNotes = notes.filter((note) => note.title !== title);
    if(remNotes.length === notes.length){
        console.log(chalk.bgRed('Enter a valid Note'));
    } else {
        saveNotes(remNotes);
        console.log(chalk.bgGreen('Note successfully removed'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue('Your Notes'));
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(note) {
        console.log('Title: ' + chalk.bold(note.title));
        console.log('Body: ' + note.body);
    } else {
        console.log(chalk.bgRed('Invaid title!'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

debugger;