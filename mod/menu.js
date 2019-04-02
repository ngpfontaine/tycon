(function(){"use strict"})()

const inquirer = require("inquirer")

/*
period             5-300 seconds
source             easy, med, hard, custom
colour-blind       true false
require correct    true false
caps               true false
*/

module.exports = [

	{
	  type: "list",
	  name: "period",
	  message: "Test Length (seconds)",
	  choices: ["10", "30", "60", "120", "180"],
	  default: "60"
	},

	{
    type: "list",
    name: "difficulty",
    message: "Word Source",
    choices: ["easy", "med", "hard"],
    default: "med"
	},

  {
    type: "confirm",
    name: "colourBlind",
    message: "Colour Blind Mode",
    default: false
	},

	{
    type: "confirm",
    name: "requireCorrect",
    message: "Require Correct Word",
    default: false
	},

	{
    type: "confirm",
    name: "caps",
    message: "First-Caps Mode (scales with difficulty)",
    default: false
	}

]