import BotClass from "../Components/Gameplay/BotClass";

const checkCollision = (botsArr) => {
  // check over the current location of each robot
  //if two robots have the same location number
  //then collision occurred
  //write logic for collision
  const locationArr = botsArr.map((bot) => bot.position);

  for (let i = 0; i < locationArr.length; i++) {
    for (let j = i + 1; j < locationArr.length; j++) {
      if (locationArr[i] === locationArr[j]) {
        return locationArr[i];
        // return true; // if any two numbers are the same, return
      }
    }
  }
  return null;
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

  let colidedPosition;
  const colidedBots = ["", ""];

  for (const [key, value] of positionMap.entries()) {
    if (value > 1) {
      colidedPosition = key;
      break;
    }
  }

  for (let i = 0; i < botsArr.length; i++) {
    if (botsArr[i].position == colidedPosition) {
      if (currBotName === botsArr[i].name) {
        colidedBots[0] = botsArr[i];
      } else {
        colidedBots[1] = botsArr[i];
      }
    }
  }

  switch (operator) {
    case "AND":
      const AND_Result = colidedBots[0].value && colidedBots[1].value;
      return updateScore(AND_Result, colidedBots[0], colidedBots[1], setMessage);
    case "OR":
      const OR_Result = colidedBots[0].value || colidedBots[1].value;
      return updateScore(OR_Result, colidedBots[0], colidedBots[1], setMessage);
    case "XOR":
      const XOR_Result = colidedBots[0].value ^ colidedBots[1].value;
      return updateScore(XOR_Result, colidedBots[0], colidedBots[1], setMessage);
    case "NOR":
      const NOR_Result = !(colidedBots[0].value || colidedBots[1].value);
      return updateScore(NOR_Result, colidedBots[0], colidedBots[1], setMessage);
  }
};

const updateScore = (result, botOne, botTwo, setMessage) => {
  if (result) {
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

    setMessage("COLLISION!!!");
    return [botOneClone, botTwoClone];
  } else {
    setMessage("TIE!!!");
    return;
  }
};

export { checkCollision, handleCollision };