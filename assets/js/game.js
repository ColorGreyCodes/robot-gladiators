var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//alert plays that they are starting the round

var fight = function(enemyName){
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0){

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
     //If player chooses to SKIP - confirm and end loop
 if (promptFight === "SKIP" || promptFight === "skip"){
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to quit?");

    //if yes (true), leave fight
    if (confirmSkip){
        window.alert(playerName + " has chosen to skip this fight. Goodbye!");
        //Subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        console.log("playerName" + " has " + playerMoney + " left.");
        break;
    }
}

     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
     var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
    //Check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
        window.alert("You defeated me!! *angry robot static noises*")
        //award player for winning
        playerMoney = Math.max(0, playerMoney + 20);
        console.log(playerMoney);
        //leave while loop() since enemy is dead
        break;
  } else{
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

      //Remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //Check player's health
    if(playerHealth <= 0){
        window.alert(playerName + " has died!");
        break;
    } else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    } // end of while loop
  } //end of fight function
  
  //function to start new game
  var startGame = function() {
    //reset play's stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
  for(var i = 0; i < enemyNames.length; i++) {
        //if player is still alive, keep fighting
        if(playerHealth > 0){
            //Let player know what round they're in
             window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
             var pickedEnemyName = enemyNames[i];
    
            //reset enemyHealth before round starts
            enemyHealth = randomNumber(40, 60);
            
    
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
    
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            // if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1){
                //ask if player wants to go to store by adding confirm prompt
                var storeConfirm = window.prompt("The fight is over, visit the store before the next round?");

                //if yes, use shop(); function to go to store
                if(storeConfirm){
                shop();
                }
            }
     }
     else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
     }
    } //end of for loop

    //after the loop ends, player is either out of health or enemies to fight. So run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else { window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.prompt("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };

  var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")

        switch(shopOptionPrompt){
            case "REFILL":
            case"refill":
            if(playerMoney >= 7){
            window.alert("Refilling " + playerName + "'s health by 20 for 7 dollars.");
            //increase playerHealth -- decrease playerMoney
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            break;}
            else{
                window.alert("You do not have enough money! Broke ass! Go fight!")
            }

            case "UPGRADE":
            case "upgrade":
                if(playerMoney >= 0) {

                window.alert("Upgrading " + playerName + "'s attack by 6 pts for 7 dollars.");
                //increase attack -- decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                break;}
                else{window.alert("You do not have enough money! Broke ass! Go fight!")
            }

                case "LEAVE":
                case "leave":
                    window.alert("leaving the store.")

                    //do nothing so function will end
                    break;
                    default:
                        window.alert("You did not pick a valid option. Try again.");

                //call shop() again to force player to pick a valid option
                shop();
                break;
        }

        var randomNumber = function(min, max){
            var value = Math.floor(Math.random() * (max - min + 1) + min);

            return value;
        };
        
};

startGame();


    
    // startGame = function(){
    //     var makeDecision = window.prompt("Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")
    //     if(makeDecision === REFILL || makeDecision === refill){
    //         playerMoney = playerMoney - 5;
    //         playerHealth = playerHealth + 5;
    //     }
    // }

    // endGame = function(){
    //     window.confirm("Would you like to play again?");
    // }

    // shop = function(){

    // }