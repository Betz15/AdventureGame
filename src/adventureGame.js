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
//variable for weapon damage
let weaponDamage = 0;
console.log("Starting weapon Damage : " + weaponDamage);
console.log("When you buy a sword weapon damage will increase to 10!");
// create variable to track weapon damage

//monster defense
let monsterDefense = 5; 
console.log("Monsters can withstand some damage in combat.");
console.log("Monster defense: " + monsterDefense);
//setup a simple monster defense value

//potion healing
let healingPotionValue = 30;
console.log("Healing Potion Value: " + healingPotionValue);
console.log("A potion will resotore " + healingPotionValue + " health");
//Set healing potion restoration value

// player location
let playerLocation = "Village";
console.log("You are currently in the " + playerLocation + ".");
//track if  it's the first visit
let firstVisit = true;

if (playerLocation === "Village") {
    if (firstVisit) {
        console.log("Welcome to the Village! It's your first time here.");
        firstVisit = false; // update first visit status
    }
    console.log("You are in the village.")
    console.log("The village is a peaceful place where you can rest and prepare for your journey.");
    console.log("where do you want to go?")
    console.log("1. Visit the blacksmith");
    console.log("2. Visit the market");
    console.log("3. Enter the forest");
    console.log("4.Check your status");
    console.log("5. Exit the game");
    let choice = parseInt(readline.question("Enter your choice (1-5): "));
    
    switch (choice){
        case 1:
            console.log("Welcome to the blacksmith!");
            break
        case 2:
            console.log("Welcome to the market!");
            break;
        case 3:
            console.log("Welcome to the forest!");
            break;  
        case 4:
            console.log("Player status:");
            break;
        case 5:
            console.log("Thank you for playing! Goodbye!");
            process.exit(); // exit the game
            break;
        default:
            console.log("Invalid choice, please try again.");
            console.log("Returning to village.");
            playerLocation = "Village"; // reset location to village
            break;
    }
} else if (playerLocation === "blacksmith"){
    console.log("You are in the blacksmith.");
    console.log("1. Return to village");
    console.log("2. Check your status");
    console.log("3. Exit the game");
    let choice = parseInt(readline.question("Enter your choice (1-5): "));
    switch (choice) {
        case 1:
            console.log("return to village");
            break;
        case 2:
            console.log("check their status");
            break;
        case 3:
            console.log("exit the game");
            process.exit(); // exit the game
        default:
            console.log("Invalid choice, returning to village.");
            playerLocation = "Village";
    }

}
//handle player movement choices from town square


