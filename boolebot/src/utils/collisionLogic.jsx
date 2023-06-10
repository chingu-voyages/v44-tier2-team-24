import BotClass from "../Components/Gameplay/BotClass";

const checkCollision = (currBot, botsArr) => {
  // check over the current location of each robot
  //if two robots have the same location number
  //then collision occurred
  //write logic for collision
  const locationArr = botsArr.map((bot) => bot.position);

  const index = botsArr.findIndex(bot => (bot.name !== botsArr[currBot].name) &&  (botsArr[currBot].position === bot.position))


  /* for (let i = 0; i < locationArr.length; i++) {
    if (locationArr[i] === locationArr[j]) {
      return locationArr[i];
      // return true; // if any two numbers are the same, return
    }
  } */
  
  return index;
};

const handleCollision = (botsArr, operator, currBotName, setMessage) => {


  const positionMap = new Map();

  botsArr.forEach((bot) => {
    if (positionMap.has(bot.position)) {
      positionMap.set(bot.position, positionMap.get(bot.position) + 1);
    } else {
      positionMap.set(bot.position, 1);
    }
  });

  //will hold the positions that contain more than 1 bot
  let colidedPosition;

  //will hold an array of bots that have collided
  const colidedBots = ["", ""];

  //only get the positions where there is more than 1 bots
  for (const [key, value] of positionMap.entries()) {
    if (value > 1) {
      colidedPosition = key;
      break;
    }
  }


  //find all bots with matching collision position
  for (let i = 0; i < botsArr.length; i++) {
    if (botsArr[i].position == colidedPosition) {
      console.log(
        "CurrBotNAme ",
        currBotName,
        "BotBeing looked at",
        botsArr[i].name
      );

      if (currBotName === botsArr[i].name) {
        colidedBots[0] = botsArr[i];
      } else {
        colidedBots[1] = botsArr[i];
      }
    }
  }



  // determine winer & loser
  // using AND

  switch (operator) {
    case "AND":
      const AND_Result = colidedBots[0].value && colidedBots[1].value;
      return updateScore(AND_Result, colidedBots[0], colidedBots[1], setMessage);
      // refactor the score-updating logic to use setter function instead of mutating array by reference
      break;
    case "OR":
      const OR_Result = colidedBots[0].value || colidedBots[1].value;
      return updateScore(OR_Result, colidedBots[0], colidedBots[1], setMessage);
      break;
    case "XOR":
      const XOR_Result = colidedBots[0].value ^ colidedBots[1].value;
      return updateScore(XOR_Result, colidedBots[0], colidedBots[1]), setMessage;
      break;
    case "NOR":
      const NOR_Result = !(colidedBots[0].value || colidedBots[1].value);
      return updateScore(NOR_Result, colidedBots[0], colidedBots[1], setMessage);
      break;
  }
};

const updateScore = (result, botOne, botTwo, setMessage) => {
  if (result) {
    // botOne.wins = botOne.wins + 1
    // botTwo.loses = botTwo.loses + 1

    const botOneClone = new BotClass(
      botOne.position,
      botOne.direction,
      botOne.name,
      botOne.colorClass,
      botOne.value,
      botOne.wins + 1,
      botOne.loses,
    );

    const botTwoClone = new BotClass(
      botTwo.position,
      botTwo.direction,
      botTwo.name,
      botTwo.colorClass,
      botTwo.value,
      botTwo.wins,
      botTwo.loses + 1,
    );

    setMessage("COLLISION!!!")
    return { isATie : false, bots: [botOneClone, botTwoClone]}
  } else {
    setMessage("TIE!")
    return { isATie : true, bots: [botOne, botTwo]}
  }
};

export { checkCollision, handleCollision };
