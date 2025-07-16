//readline-sync paquete de node.js sirve para leer datos del usuario desde la consola, de manera sincrona
const readline = require("readline-sync");
/*
Adventure Game 
This game will be a text-based adventure game where the player will be able to make choices that affect the outcome of the game.
The player will be to choose their own path and the story will change based on the story will change based on their decisions.
*/

//Display the game title 
console.log("Welcome to Adventure Game!");

//Add a welcome message 
console.log("Prepare yourself for an epic journey!");

//Get player name using readline-sync
const playerName = readline.question("What is your name, brave adventurer? ");
console.log("Welcome " + playerName + ", your adventure begins now!");
let playerGold = 100;
console.log("You have " + playerGold + " gold coins.");
//let playerName = "";
let inventory = [];
//create variable for player stats
let playerStats = {
    health: 100,
    strength: 10,
    defense: 5
};



