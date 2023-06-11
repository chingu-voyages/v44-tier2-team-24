import BotClass from "../Components/Gameplay/BotClass";

const checkCollision = (currBot, botsArr) => {
  const locationArr = botsArr.map((bot) => bot.position);

  const index = botsArr.findIndex(bot => {
    const notCurrentBot = bot.name !== botsArr[currBot].name; 

    return notCurrentBot && (botsArr[currBot].position === bot.position);
  })
  
  if(index !== -1){
    console.log("Collided bot ", botsArr[index]);
    console.log("CURR BOT", currBot)
    return botsArr[index].position
  }
  return -1
};

const handleCollision = (botsArr,
              operator,
              currBotName,
            ) => {


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
      return updateScore(AND_Result, colidedBots[0], colidedBots[1]);
      break;
    case "OR":
      const OR_Result = colidedBots[0].value || colidedBots[1].value;
      return updateScore(OR_Result, colidedBots[0], colidedBots[1]);
      break;
    case "XOR":
      // (a && !b) || (!a && b)
      const XOR_Result = colidedBots[0].value === colidedBots[1].value ? true : false

      console.log("XOR RESUT", XOR_Result)
      return updateScore(!XOR_Result, colidedBots[0], colidedBots[1]);
      break;
    case "NOR":
      const NOR_Result = !(colidedBots[0].value || colidedBots[1].value);
      return updateScore(NOR_Result, colidedBots[0], colidedBots[1]);
      break;
  }
};

const updateScore = (result, botOne, botTwo) => {
  console.log("SET MESSAGE UP", result, botOne, botTwo)
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
    return { isATie : false, bots: [botOneClone, botTwoClone]}
  } else {
    return { isATie : true, bots: [botOne, botTwo]}
  }
};

export { checkCollision, handleCollision };
