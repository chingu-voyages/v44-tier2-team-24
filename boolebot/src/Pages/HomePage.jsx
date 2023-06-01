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
      text: "Explore the fascinating world of boolean values through an entertaining game called Boolebots. Select a board size, assemble your own army of bots, and witness the magic of boolean operators in action. Let's dive in and unravel the mysteries of these operators together!"
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
