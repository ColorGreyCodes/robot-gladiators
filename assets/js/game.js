var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName){
    
    //alert plays that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // If player chooses to fight, then fight
    if(promptFight === "FIGHT" || promptFight === "fight"){
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
    //Check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
  } else{
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
    };

      // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    //Check player's health
    if(playerHealth <0){
        window.alert(playerName + " has died!")
    } else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    //If player chooses to SKIP
    } else if (promptFight === "SKIP" || promptFight === "skip"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        //if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has chosen to skip this fight. Goodbye!");
            //Subtract money from playerMoney for skipping -2
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }
  }
  for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
    
 }

  //Starts the round
// fight();