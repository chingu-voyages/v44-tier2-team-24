import generateRandomNumber from "../../utils/randomNum"

//Basic bot class
class BotClass {
  constructor(
    position,
    direction,
    name,
    colorClass,
    value,
    wins = 0,
    loses = 0
    // isAlive = true,
  ) {
    this.position = position;
    this.direction = direction;
    this.value = value;
    this.name = name;
    this.colorClass = colorClass;

    (this.wins = wins), (this.loses = loses);
    /* 
      this.isAlive = isAlive
    */
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

    this.direction = validDirections[randIndex - 1];
  }

  updateBotPosition(newPosition) {
    this.position = newPosition;

    // console.log(`New position now: ${this.printBotData()}`)

    // console.log('#######################################################################################')
  }

  //will determine if the bots next movement is valid
  isValidMove(direction, tileNum) {
    /*
            1 is up
            2 is down
            3 is left 
            4 is right
        */
    switch (direction) {
      case 1:
        return this.position - tileNum > 0;
      case 2:
        return this.position + tileNum <= tileNum * tileNum;
      case 3:
        return (this.position - 1) % tileNum != 0;
      case 4:
        return (this.position + 1) % tileNum != 1;
    }
  }

  setNextDirection(tileNum) {
    switch (this.direction) {
      case 1:
        if (this.position - tileNum < 1) {
          //find new direction and stop new direction is valid
          //once new direction s valid update the new bots direction
          this.getNewDirection(tileNum);
        }
        break;
      case 2:
        if (this.position + tileNum > (tileNum * tileNum)) {
          this.getNewDirection(tileNum);
        }
        break;
      case 3:
        if ((this.position - 1) % tileNum == 0) {
          this.getNewDirection(tileNum);
        }
        break;
      case 4:
        if ((this.position + 1) % tileNum == 1) {
          this.getNewDirection(tileNum);
        }
        break;
    }
  }

  calcNextMove(tileNum) {
    console.log(`Moving Bot : ${this.printBotData()}`);

    this.setNextDirection(tileNum);

    switch (this.direction) {
      case 1:
        this.updateBotPosition(this.position - tileNum);
        break;

      case 2:
        this.updateBotPosition(this.position + tileNum);
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
