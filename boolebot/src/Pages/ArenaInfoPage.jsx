import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useState } from 'react';


export default function ArenaSettings(props) {
  const [boardData, setBoardData] = useState({
    operator: "",
    boardSize: ""
  }) 

function handleChange(e){
  const changedField = e.target.name;
  const newValue = e.target.value;
  setBoardData((currentData)=>{
    currentData[changedField] = newValue;
    return {...currentData};
  })
}
function handleSubmit(e){
  e.preventDefault();
  props.boardDataSubmission(boardData);
}

return (
    <>
      <h2>Arena Settings</h2>      
     
        <form onSubmit={handleSubmit}>
          <fieldset>
            
            <label htmlFor="booleOperator">
              Choose Boolean Operator:
              <select
                id="operator"
                name="operator"
                value={boardData.operator}
                onChange={handleChange}
                required
              >
                <option value="select operator">Select Operator</option>
                <option value="and">AND</option>
                <option value="or">OR</option>
                <option value="not">NOT</option>
                <option value="nor">NOR</option>
              </select>
            </label>
            <label>
              Board Size
              <select id='board' name='boardSize' value={boardData.boardSize} onChange={handleChange} required>
                <option value='select board size'>Select board size</option>
                <option value='3 x 3'> 3 x 3</option>
                <option value='4 x 4'> 4 x 4</option>
                <option value='5 x 5'> 5 x 5</option>
                <option value='6 x 6'> 6 x 6</option>
                <option value='7 x 7'> 7 x 7</option>
                <option value='8 x 8'> 8 x 8</option>

              </select>
            </label>
            
           
            <button type="submit">Submit</button>
            <button onClick={(e)=>{
              e.preventDefault();
              Swal.fire('Know about the operators')
            }} >Learn More</button>
          </fieldset>
        </form>
       <Link to="/createBot"><button >Create Your Bots</button></Link> 
      
    </>
  );
};