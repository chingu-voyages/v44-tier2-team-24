import generateRandomNumber from "../../utils/randomNum"

//Basic bot class
class BotClass {
  constructor(
    position,
    direction,
    tile,
    name,
    colorClass,
    value,
    wins = 0,
    loses = 0,
    isAlive = true,
  ) {
    this.position = position;
    this.direction = direction;
    this.tile = tile;
    this.totalTiles = this.tile * this.tile;
    this.value = value;
    this.name = name;
    this.colorClass = colorClass;
    this.isAlive = isAlive
    this.wins = wins, 
    this.loses = loses;
  }

  printBotData() {
    return `${this.name}: Position: ${
      this.position
    }, Direction: ${this.printDirection()}`;
  }

  printDirection() {
    switch (this.direction) {
      case 1:
        return "up";
      case 2:
        return "down";
      case 3:
        return "left";
      case 4:
        return "right";
    }
  }

  getNewDirection() {
    const validDirections = [];

    for (let i = 1; i <= 4; i++) {
      if (this.isValidMove(i)) {
        validDirections.push(i);
      }
    }

    let randIndex = generateRandomNumber(validDirections.length);
    console.log(`old direction ${this.printDirection()}`);
    this.direction = validDirections[randIndex - 1];
    console.log(`New direction ${this.printDirection()}`);
  }

  updateBotPosition(newPosition) {
    this.position = newPosition;

    // console.log(`New position now: ${this.printBotData()}`)

    // console.log('#######################################################################################')
  }

  //will determine if the bots next movement is valid
  isValidMove(direction) {
    /*
            1 is up
            2 is down
            3 is left 
            4 is right
        */
    switch (direction) {
      case 1:
        return this.position - this.tile > 0;
      case 2:
        return this.position + this.tile <= this.totalTiles;
      case 3:
        return (this.position - 1) % this.tile != 0;
      case 4:
        return (this.position + 1) % this.tile != 1;
    }
  }

  setNextDirection() {
    switch (this.direction) {
      case 1:
        if (this.position - this.tile < 1) {
          //find new direction and stop new direction is valid
          //once new direction s valid update the new bots direction
          this.getNewDirection();
        }
        break;
      case 2:
        if (this.position + this.tile > this.totalTiles) {
          this.getNewDirection();
        }
        break;
      case 3:
        if ((this.position - 1) % this.tile == 0) {
          this.getNewDirection();
        }
        break;
      case 4:
        if ((this.position + 1) % this.tile == 1) {
          this.getNewDirection();
        }
        break;
    }
  }

  calcNextMove() {
    console.log(`Moving Bot : ${this.printBotData()}`);

    this.setNextDirection();

    switch (this.direction) {
      case 1:
        this.updateBotPosition(this.position - this.tile);
        break;

      case 2:
        this.updateBotPosition(this.position + this.tile);
        break;

      case 3:
        this.updateBotPosition(this.position - 1);
        break;
      case 4:
        this.updateBotPosition(this.position + 1);
        break;
    }

    //check to see if a collision
  }
}

export default BotClass;
