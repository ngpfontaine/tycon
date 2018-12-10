const chalk = require("chalk") // Console text styling
const chart = require("asciichart") // Chart results
const zero = require("./zero.js") // Leading zero-ify

var out = {

	// Clear console
	clear: function() {
		process.stdout.write("\033c")
	},

	newline: function() {
		console.log(chalk.gray(" _"))
		console.log("")
	},

	init: function(diff) {
		out.clear()
		console.log(chalk.bold.green("[Tycon]") + " Level: " + chalk.bold(diff.toUpperCase()))
		console.log("")
		out.shortcuts()
		console.log("")
	},

	ready: function(format) {
		console.log(" " + format())
		out.newline()
	},

	next: function(remain, avg, format) {
		out.stats(remain, avg)
		console.log(" " + format())
		// console.log("")
		out.newline()
	},

	system: {
		words: function(format) {
			console.log(" " + format())
		}
	},

	user: {
		current: function(text) {
			console.log(" " + chalk.bold(text) + chalk.gray("_"))
			console.log("")
			// out.newline()
		}
	},

	// Show typing stats, Time left, and Avg. typed
	statsTick: function(remain, avg) {
		out.clear()
		console.log(chalk.bold("[" +
			zero(remain)) +
			" Avg: " +
			chalk.bold(zero(avg)) +
			"]")
		console.log("")
	},

	// Same as statsTick(), but use last avg value instead of incorrectly calculating it
	stats: function(remain, prevAvg) {
		out.clear()
		console.log(chalk.bold("[" +
			zero(remain)) +
			" Avg: " +
			chalk.bold(zero(prevAvg)) +
			"]")
		console.log("")
	},

	// Complete state, show Correct, Incorrect, and Hotkeys
	complete: function(len, diff, correct, incorrect, log, backspace) {
		out.clear()
		console.log(chalk.bold.green("[Complete] ") + len + " seconds, " + chalk.bold(diff.toUpperCase()))
		console.log("")
		console.log("WPM:       " + chalk.bold((correct * 60) / len))
		console.log("Correct:   " + (chalk.bold(correct)))
		console.log("Incorrect: " + incorrect)
		console.log("Backspace: " + backspace)
		console.log("")
		// (Note) sporadic issue here from asciichart complaining about array length.
		if (log > 0) {
			console.log(chart.plot(log, { height: 5}))
		}
		console.log("")
		out.shortcuts()
		console.log("")
	},

	// Quit app. log exit message, and exit process
	quit: function() {
		out.clear()
		console.log("Tycon says \"Bye!\"")
	},

	// Instructions for Start / Exit shortcuts
	shortcuts: function() {
		console.log(chalk.inverse("^R") + " Start")
		console.log(chalk.inverse("^C") + " Exit")
	}

}

module.exports = out