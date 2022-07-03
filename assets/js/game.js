var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fight = function(enemy){
    var isPlayerTurn = true;
    if(Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    console.log(enemy);
    //repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0){
        
    if(fightOrSkip()) {
      break;
    }

     //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
     var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
    
    //Check enemy's health
    if (enemy.health <= 0){
        window.alert(enemy.name + " has died!");
        window.alert("You defeated me!! *angry robot static noises*")
        //award player for winning
        playerInfo.money = Math.max(0, playerInfo.money + 20);
        console.log(playerInfo.money);
        //leave while loop() since enemy is dead
        break;
  } else{
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

      //Remove players's health by subtracting the amount set in the enemy.attack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

    //Check player's health
    if(playerInfo.health <= 0){
        window.alert(playerInfo.name + " has died!");
        break;
    } else{
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    isPlayerTurn = !isPlayerTurn;
    } // end of while loop
  } //end of fight function
  
  //function to start new game
  var startGame = function() {
    //reset play's stats
    playerInfo.reset();
  for(var i = 0; i < enemyInfo.length; i++) {
        //if player is still alive, keep fighting
        if(playerInfo.health > 0){
            //Let player know what round they're in
             window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
             var pickedEnemyObj = enemyInfo[i];
    
            //reset enemy.health before round starts
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
        shopOptionPrompt = parseInt(shopOptionPrompt);
        switch(shopOptionPrompt){
            case 1:
            playerInfo.refillHealth();
                break;
            case 2:
                playerInfo.upgradeAttack();
                  break;
            case 3:
                  window.alert('Leaving the store.');
            
                  // do nothing, so function will end
                  break;
            default:
            window.alert('You did not pick a valid option. Try again.');
              shop();
              break;
              }
        
};

var getPlayerName = function(){
    var name ="";

    while (name === "" || name === null){

        name = prompt("What is your robot's name?")
    }

    console.log("Your robot's name is " + name + ".");
    return name;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
     reset: function(){
        this.health = 100;
        this.attack = 10;
        this.money = 10;
     },
     refillHealth:function(){
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
     }
     else  {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
        } 
        else {
          window.alert("You don't have enough money!");
        }
    },

     upgradeAttack: function(){
        this.attack += 6;
        this.money -= 7;
     }
};

var enemyInfo = [

    {name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
    
    ]

var fightOrSkip = function(){
     // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  promptFight = promptFight.toLowerCase();

  if (!promptFight) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
    }

    
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;

      return true;
      shop();
    }
    return false;
  }
}


startGame();


    
    // startGame = function(){
    //     var makeDecision = window.prompt("Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")
    //     if(makeDecision === REFILL || makeDecision === refill){
    //         playerInfo.money = playerInfo.money - 5;
    //         playerInfo.health = playerInfo.health + 5;
    //     }
    // }

    // endGame = function(){
    //     window.confirm("Would you like to play again?");
    // }

    // shop = function(){

    // }