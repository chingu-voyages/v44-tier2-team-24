import React from 'react'

export default function getOccupiedPos(botsArr, tileNum) {
    let occupiedPositions = []

    botsArr.forEach(bot => {
        if(bot.position){
            if (bot.position > 0 && bot.position <= tileNum * tileNum){
               if (!occupiedPositions.includes(bot.position)){
                occupiedPositions.push(bot.position)
               }
            }

            if (bot.position - tileNum > 0) {
                if (!occupiedPositions.includes(bot.position - tileNum))
                  {
                    occupiedPositions.push(bot.position - tileNum)
                  }
              }

            if(bot.position + tileNum <= tileNum * tileNum){
              if(!occupiedPositions.includes(bot.position + tileNum) ){
                occupiedPositions.push(bot.position + tileNum)
              }
            }

            if((bot.position - 1) % tileNum != 0){
              if(!occupiedPositions.includes(bot.position - 1)){
                occupiedPositions.push(bot.position - 1)
              }
            }

            if((bot.position + 1) % tileNum != 1){
              if(!occupiedPositions.includes(bot.position + 1)){
                occupiedPositions.push(bot.position + 1)
              }
            }

            if(bot.position % tileNum !== 0 && bot.position - (tileNum - 1) > 0){
              if(!occupiedPositions.includes(bot.position - (tileNum - 1))){
                occupiedPositions.push(bot.position - (tileNum - 1) )
              }
            }

            if(bot.position % tileNum !== 1 && bot.position - (tileNum + 1) > 0){
              if(!occupiedPositions.includes(bot.position - (tileNum + 1))){
                occupiedPositions.push(bot.position - (tileNum + 1));

              }
            }

            if(bot.position % tileNum !== 0 && bot.position + (tileNum + 1) < tileNum * tileNum){
              if(!occupiedPositions.includes(bot.position + (tileNum + 1)))
              {
                occupiedPositions.push(bot.position + (tileNum + 1))

              }
            }

            if(bot.position % tileNum !== 1 && bot.position + (tileNum - 1) < tileNum * tileNum){
              if(!occupiedPositions.includes(bot.position + (tileNum - 1))){
                
                occupiedPositions.push(bot.position + (tileNum - 1));
            }

          }
          
        }
      })
  
      return occupiedPositions
}
