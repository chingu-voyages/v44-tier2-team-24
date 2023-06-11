import { Link } from 'react-router-dom';
import InfoIcon from "../assets/info-circle-svgrepo-com.svg"
import sweetAlertMixin from "../Components/SweetAlertConfig";


function Navigation() {
  const showInstructions = () => {
    sweetAlertMixin.fire({
      
      html: `
      <h3>Instructions</h3>
      <p>
      Boole Bots is a game that is not only fun, but also an aid in helping to understand basic Boolean logic. This game has an arena of game tiles in which your bots move at random speeds and trajectories. The Bots are assigned boolean values of 0 or 1 and a boolean operations - AND, OR, NOR, NOT ,can be assigned to the arena itself.
      </p>
      <p>
      The behavior of bots colliding with each other is determined by applying a boolean operation to their boolean values. Let's break down the process: </p>
    
      
            <p> 1. <b>When two bots collide:</b> When a bot encounters another bot in the game, a collision occurs.</p>

            <p> 2. <b>Boolean operation:</b> Each bot has a boolean value associated with it. A boolean operation is applied to both the colliding bot and the bot it collided with. The specific boolean operation used could be a logical operation like AND, OR, NOR and NOT, as selected by the player.</p>

            <p> 3.<b>Determining the winner or loser:</b> The result of the boolean operation determines the outcome of the collision. It could determine which bot wins, which bot loses, or if the collision results in a tie.</p>
            
            <p> 4. <b>Disappearance of losing bots:</b> If a bot loses the collision, it disappears from the game. It implies that losing bots are removed from the game arena.</p>

            <p> 5. <b>Continuation of winning bots:</b> Winning bots, those that are determined to be the victors of a collision, continue to move about the arena. They remain in the game and participate in further collisions with other bots.</p>

            <p> 6. <b>Last bot standing:</b> The game continues with bots colliding and applying boolean operations until only one bot remains. This final bot is the last survivor and is the winner of the game. </p>
        

        </p>
        <p>
            The specific rules for determining the winner or loser based on the boolean operation are as follows:
            
            <section>
            <h4> AND:</h4>
              <p> When both Bot 1 and Bot 2 have a boolean value of 0 (false), the result is 0. This leads to a tie since neither bot wins.</p>
              <p> When Bot 1 has a boolean value of 0 (false) and Bot 2 has a boolean value of 1 (true), the result is 0. Again, this results in a tie.</p>
              <p> Similarly, when Bot 1 has a boolean value of 1 (true) and Bot 2 has a boolean value of 0 (false), the result is 0, leading to a tie.</p>
              <p> When both Bot 1 and Bot 2 have a boolean value of 1 (true), the result is 1. In this case, the first bot to move is considered the winner.</p>
            </section>
            <section>
             <h4>OR:</h4>
              <p> If either Bot 1 or Bot 2 (or both) has a boolean value of 1 (true), the result is 1. In this case, the first bot to move is considered the winner.</p>
              <p> When both Bot 1 and Bot 2 have a boolean value of 0 (false), the result is 0. This leads to a tie.</p>
            </section>
            <section>
             <h4>XOR:</h4>
              <p> When both Bot 1 and Bot 2 have the same boolean value (either both true or both false), the result is 0. This results in a tie.</p>
              <p> If Bot 1 and Bot 2 have different boolean values (one is true and the other is false), the result is 1. In this case, the first bot to move is considered the winner.</p>
            </section>
            <section>
             <h4>NOR: </h4> 
              <p> If both Bot 1 and Bot 2 have a boolean value of 0 (false), the result is 1. In this case, the first bot to move is considered the winner.</p>
              <p> When either Bot 1 or Bot 2 (or both) has a boolean value of 1 (true), the result is 0. This leads to a tie.</p>
            </section>
            <p>
              `
      
      
    });
  };
  
    return (
      <header>
        <nav>
          <Link to="/">
            <h1>BooleBots</h1>
          </Link>
         
          <ul className="nav-links">
          <li><Link
                to="#"
                onClick={() => {
                  showInstructions();
                }}
                id='instructions_icon'
              >
             
             <img src={InfoIcon} alt="instruction icon" style={{width:"2em", height:"2em"}}/>
              </Link></li>
            <li>
              <Link
                to="#"
                onClick={() => {
                  showInstructions();
                }}
                className='instructions'
              >
             
                Game Instructions
              </Link>
            </li>
            <li>
              <Link to="/about" className='about_us'>About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );

}

export default Navigation;