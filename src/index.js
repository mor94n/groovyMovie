const yargs = require ("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { addFilm, list, update, deleteOne, deleteAll, find } = require('./Movies/methods');

const app = async () => {
    if (argv.add) {
        const filmObj = {
            name: argv.title,
            actor: argv.actor,
            year: argv.year,
            season: argv.season
        }
        await addFilm(filmObj)
    }
    else if (argv.list) {
        await list()
    }
    else if (argv.find) {
        await find()
    }
    else if (argv.update) {
        await update()
    }
    else if (argv.delete) {
        await deleteOne()
    }
    else if (argv.deleteAll) {
        await deleteAll()
    }
    else {
        console.log("Wrong Command Loser!")
    }
};

app()