// Part 1: Building the Object
function gameObject(){
    let teamInfo = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1 
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7 
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15 
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5 
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1 
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2 
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10 
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5 
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0 
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12 
                }
            }
        }
    }

    return teamInfo;
}


// Step 2: Building Functions
// Calling Functions Within Functions

// -- Debugging using DevTools --

//////////////// ASSIGNMENT //////////////////////

// Function Building
// Function 1 - numPointsScored()
function numPointsScored(playerName){
    let gameInfo = gameObject();
    
    if (Object.keys(gameInfo.home.players).includes(playerName)){
        return gameInfo.home.players[playerName]["points"];
    } else if (Object.keys(gameInfo.away.players).includes(playerName)){
        return gameInfo.away.players[playerName]["points"];
    } else {
        return "Player does not exist.";
    }
};

// Function 2 - shoeSize()
function shoeSize(playerName){
    let gameInfo = gameObject();

    if (Object.keys(gameInfo.home.players).includes(playerName)){
        return gameInfo.home.players[playerName]["shoe"];
    } else if (Object.keys(gameInfo.away.players).includes(playerName)){
        return gameInfo.away.players[playerName]["shoe"];
    } else {
        return "Player does not exist.";
    }
};

// Function 3 - teamColors()
function teamColors(team){
    let gameInfo = gameObject();

    if (gameInfo.home.teamName === team){
        return gameInfo.home.colors;
    } else if (gameInfo.away.teamName === team){
        return gameInfo.away.colors;
    } else {
        return "Team does not exist.";
    }
};

// Function 4 - teamNames()
function teamNames(){
    let gameInfo = gameObject();

    return [gameInfo.home.teamName, gameInfo.away.teamName];
};

// Function 5 - playerNumbers()
function playerNumbers(team){
    let gameInfo = gameObject();

    let jerseyNumbers = [];

    if (gameInfo.home.teamName === team){
        for (let player in gameInfo.home.players){
            let playersObject = gameInfo.home.players;
            jerseyNumbers.push(playersObject[player].number);
        }
        return jerseyNumbers;
    } else if (gameInfo.away.teamName === team){
        for (let player in gameInfo.away.players){
            let playersObject = gameInfo.away.players;
            jerseyNumbers.push(playersObject[player].number)
        }
        return jerseyNumbers;
    } else {
        return "Team does not exist.";
    }
}

// Function 6 - playerStats()
function playerStats(playerName){
    let gameInfo = gameObject();

    if (Object.keys(gameInfo.home.players).includes(playerName)){
        return gameInfo.home.players[playerName];
    } else if (Object.keys(gameInfo.away.players).includes(playerName)){
        return gameInfo.away.players[playerName];
    } else {
        return "Player does not exist.";
    }
}


// Function 7 - bigShoeRebounds()
function bigShoeRebounds(){
    let gameInfo = gameObject()

    let rebounds; //initialize a variable to store rebounds
    let playerName; // initialize a variable for player name
    let shoeSize = 0; //initialize shoe size

    for (let team in gameInfo){ //loop over team names
        let players = gameInfo[team].players; //get the object with player stats

        // Loop over every player and access his stats
        for (let player in players){
            let playerInfo = players[player];
            // check if the player's shoe size is > current shoe size
            if (playerInfo.shoe > shoeSize) { 
                shoeSize = playerInfo.shoe; // update shoe size
                playerName = player; // update player name
                rebounds = playerInfo.rebounds; //update number of rebounds
                //console.log(shoeSize);
                //console.log(playerName);
                //console.log(rebounds);
            }
                
        }

        
    }
    return rebounds; // return rebounds for player with the largest shoe size
};


/////////////// BONUS QUESTIONS ////////////////

