import React from "react";
// import styles from "./HomePage.module.css";
// import Container from "../Components/Layout/Container";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import botImage from "../assets/booleBotsHome.png";

export default function Homepage() {
  return (
    
    
      <div className="main_body">
        {/* Below this line is the bot image*/}
       <div className='imgWrapper' >
        <img src={botImage} />
        </div> 

          <section className="homepageBtns">
            <Link to="/arenaSettings">
              <button className='startBtn'>Start</button>
            </Link>

            <button
              className='instructionBtn'
              onClick={() => {
               Swal.fire({
                  title: "We will explain how to play the game",
                  width: 600,
                  padding: "3em",
                  color: "#716add",
                  background:
                    "#fff url(https://sweetalert2.github.io/#iconsimages/trees.png)",
                });

               
              }}
            >
              How to play
            </button>
          </section>
          
      </div>
     
    
  );
}
