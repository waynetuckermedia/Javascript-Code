const team = {
    _players: [
      {firstName: 'Rod', lastName: 'Bishop', age: 23},
      {firstName: 'Katrina', lastName: 'Alverez', age: 25},
      {firstName: 'Nia', lastName: 'Holmes', age: '20'}
    ],
    _games: [
      {opponent: 'Jets', teamPoints: 42, opponentPoints: 27},
      {opponent: 'Giants', teamPoints: 45, opponentPoints: 12},
      {opponent: 'Eagles', teamPoints: 31, opponentPoints: 15}
    ],
    get players() {
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName, 
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game)
    }
  };
  
  team.addPlayer('Bugs','Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100,98)
  console.log(team.games);

  
  Methods
  At this point, we have a Dog class that spins up objects with name and behavior properties. Below, we will add getters and a method to bring our class to life.
  
  Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
  
  class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get behavior() {
      return this._behavior;
    }
   
    incrementBehavior() {
      this._behavior++;
    }
  }
  In the example above, we add getter methods for name and behavior. Notice, we also prepended our property names with underscores (_name and _behavior), which indicate these properties should not be accessed directly. Under the getters, we add a method named .incrementBehavior(). When you call .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property. Between each of our methods, we did not include commas.