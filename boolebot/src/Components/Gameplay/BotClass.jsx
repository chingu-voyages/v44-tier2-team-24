import generateRandomNumber from "../../utils/randomNum"

//Basic bot class
class BotClass {
  constructor(
    position,
    direction,
    name,
    value,
    botIcon,
    wins = 0,
    loses = 0,
  ) {
    this.position = position;
    this.direction = direction;
    this.name = name;
    this.value = value;
    this.wins = wins,
    this.loses = loses;
    this.botIcon = botIcon
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

  getNewDirection(tileNum) {
    const validDirections = [];

    for (let i = 1; i <= 8; i++) {
      if (this.isValidMove(i, tileNum)) {
        validDirections.push(i);
      }
    }

    let randIndex = generateRandomNumber(validDirections.length);

    this.direction = validDirections[randIndex - 1];
  }

  updateBotPosition(newPosition) {
    this.position = newPosition;
  }

  //will determine if the bots next movement is valid
  isValidMove(direction, tileNum) {

    switch (direction) {
      case 1:
        return this.position - tileNum > 0;
      case 2:
        return this.position + tileNum <= tileNum * tileNum;
      case 3:
        return (this.position - 1) % tileNum != 0;
      case 4:
        return (this.position + 1) % tileNum != 1;
      case 5:
        return this.position % tileNum !== 0 && this.position - (tileNum - 1) > 0
      case 6:
        return this.position % tileNum !== 1 && this.position - (tileNum + 1) > 0
      case 7:
        return this.position % tileNum !== 0 && this.position + (tileNum + 1) < tileNum * tileNum
      case 8:
        return this.position % tileNum !== 1 && this.position + (tileNum - 1) < tileNum * tileNum
    }
  }

  setNextDirection(tileNum) {
    switch (this.direction) {
      case 1:
        if (this.position - tileNum < 1) {
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

      case 5:
        if (this.position % tileNum === 0 || this.position - (tileNum - 1) <= 0) {
          //find new direction and stop new direction is valid
          //once new direction s valid update the new bots direction
          this.getNewDirection(tileNum);
        }
        break;

      case 6:
        if (this.position % tileNum === 1 || this.position - (tileNum + 1) < 0) {
          this.getNewDirection(tileNum);
        }
        break;

      case 7:
        if (this.position % tileNum === 0 || this.position + (tileNum + 1) > tileNum * tileNum) {
          this.getNewDirection(tileNum);
        }
        break;

      case 8:
        if (this.position % tileNum === 1 || this.position + (tileNum - 1) > tileNum * tileNum) {
          this.getNewDirection(tileNum);
        }
        break;
    }
  }

  calcNextMove(tileNum) {


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

      case 5:
        this.updateBotPosition(this.position - (tileNum - 1));
        break;

      case 6:
        this.updateBotPosition(this.position - (tileNum + 1));
        break;

      case 7:
        this.updateBotPosition(this.position + (tileNum + 1));
        break;
      case 8:
        this.updateBotPosition(this.position + (tileNum - 1));
        break;
    }

    //check to see if a collision
  }
}

export default BotClass;
