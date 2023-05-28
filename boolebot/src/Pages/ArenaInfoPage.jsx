import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

export default function ArenaSettings() {
return (
    <>
      <h2>Arena Settings</h2>      
     
        <form>
          <fieldset>
            
            <label htmlFor="boole_op">
              Choose Boolean Operator:
              <select
                id="boole_op"
                name="boole_op"
                // value={booleanOperator}
                // onChange={(event) => setBooleanOperator(event.target.value)}
              >
                <option value="and">AND</option>
                <option value="or">OR</option>
                <option value="not">NOT</option>
                <option value="nor">NOR</option>
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