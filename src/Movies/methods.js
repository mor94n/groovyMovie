const Film = require("./model.js");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

//ADD FILM
exports.addFilm = async (filmObj) => {
    try{
        await Film.sync();
        await Film.create(filmObj);
    } catch (error) {
        console.log(error);
    }
};
//LIST
exports.list = async () => {
    try{
        const listOfMovies = await Film.findAll();
        console.log(listOfMovies);
    }catch (error) {
        console.log(error);
    }
};
//LIST W/ PARAMETERS
exports.find = async () => {
	try {
		if (argv.title) {
			const findThis = await Film.findAll({
				where: {
					name: argv.title
				}
			})
			console.log(findThis);
		}
		else if (argv.actor) {
			const findThis = await Film.findAll({
				where: {
					actor: argv.actor
				}
			})
			console.log(findThis);
		}
		else if (argv.year) {
			const findThis = await Film.findAll({
				where: {
					year: argv.year
				}
			})
			console.log(findThis);
		}
		else {
			console.log('Nothing to find, lmao!')
		}
	} catch (error) {
		console.log(error)
	}
}
//UPDATE
exports.update = async () => {
    try {
        if (argv.newTitle) {
            await Film.update ({ name: argv.newTitle}, {
                where: {
                    name: argv.title,
                }
            });
        }
        else if (argv.newActor) {
            await Film.update ({ actor: argv.newActor}, {
                where: {
                    actor: argv.actor,
                }
            });
        }
        else if (argv.newYear) {
			await Film.update( {year: argv.newYear}, {
				where: {
					year: argv.year
				}
			})
		}
		else {
			console.log("update error");
		}
	} catch (error) {
		console.log(error);
	}
};
//DELETE ONE
exports.deleteOne = async () => {
	try {
		if (argv.title) {
			await Film.destroy( {
				where: {
					name: argv.title
				}
			})
		}
		else if (argv.actor) {
			await Film.destroy({
				where: {
					actor: argv.actor
				}
			})
		}
		else if (argv.year) {
			await Film.destroy({
				where: {
					year: argv.year
				}
			})
		}
		else {
			console.log('deleted some data');
		}
	} catch (error) {
		console.log(error)
	}
}
//DELETE EVERYTHING
exports.deleteAll = async () => {
	try {
		await Film.destroy(
			{
				truncate : true
			}
		)
		console.log('everything is destroyed!!!')
	} catch (error) {
		console.log(error)
	}
};
