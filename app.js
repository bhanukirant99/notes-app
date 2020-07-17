// const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes');

// console.log(validator.isEmail('@gmail.com'));
// console.log(validator.isURL('htt://www.npmjs.com/package/validator'));
// console.log(chalk.bold.green.inverse('Success'));
// console.log(chalk.bgGreen('Success'));

// const arg = process.argv[2];

// if (arg === 'add') {
//     console.log("Adding");
// } else if (arg === 'remove') {
//     console.log("Removing");
// }

// console.log(process.argv);

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);

    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);

    }
});

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'reading notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

debugger;

yargs.parse();