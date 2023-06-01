import React, {useEffect} from "react";
import Swal from "sweetalert2";
import sweetAlertMixin from "../Components/SweetAlertConfig";
import { Link } from "react-router-dom";
import botImage from "../assets/booleBotsHome.png";


export default function Homepage() {
  // const [isLoading, setIsLoading] = useState(true);
  const showInstructions = () => {
    sweetAlertMixin.fire({
      title: 'BOOLBOTS',
      html: 
      `<p>Explore the fascinating world of boolean values through an entertaining game called Boolebots
      </p>
      <ol>
      <li>1. Select a board size</li>
      <li>2. Assemble your own army of bots</li>
      <li>3. Witness the magic of boolean operators in action. Let's dive in and unravel the mysteries of these operators together!
      </li>
      </ol>
      `
      
    });
  };
  useEffect(()=>{
    showInstructions();
  }, [])
  

  return (
    <div className="main_body">
      {/* Below this line is the bot image*/}
      <div className="imgWrapper">
        <img src={botImage} alt="Bot" />
      </div>

      <section className="homepageBtns">
        <Link to="/arenaSettings">
          <button className="startBtn">Start</button>
        </Link>

        {/* Use the showInstructions function as the click event handler
        <button className="instructionBtn" onClick={showInstructions}>
          How to play
        </button> */}
      </section>
    </div>
  );
}
