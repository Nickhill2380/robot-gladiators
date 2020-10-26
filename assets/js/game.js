var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//You can also log multiple values at once like this

//Games States
//"WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robots
//"LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
   
    while (enemyHealth > 0 && playerHealth > 0) { 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
        //comfirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes (true), leave fight
        if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }
    }
    
//Subract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
enemyHealth=enemyHealth-playerAttack;
//Log a resulting message to the console so we know that it worked
console.log(
    playerName + " attacked " + enemyName +  ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

//check enemy's health
if (enemyHealth <= 0){
    window.alert(enemyName + " has died!");
    

    //award player money for winning
    playerMoney = playerMoney + 20;

    //leave while () loop since enemy is dead
    break;
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
//Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
playerHealth=playerHealth-enemyAttack;
//Log a resulting message to the console so we know that it worked
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

//check player's heatlh
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    endGame();
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
} 
};

//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    

for(var i = 0; i < enemyNames.length; i++) {
        
    if (playerHealth > 0){
        //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    
    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    
    //rest enemyHealth before starting new fight
    enemyHealth = 50;

    

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}

startGame();
};

var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
}
else {
    window.alert("You've lost your robot in battle.");

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
}
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
}
//start the game when the page loads
startGame();

