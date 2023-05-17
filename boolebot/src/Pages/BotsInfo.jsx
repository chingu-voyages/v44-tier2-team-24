// import "../../src/App.scss";
export default function BotsInfo() {
  return (
<>
<h2>Create Bot</h2>
<div className="createdBots">
  <h3>bot 1</h3>
  <h3>bot 2</h3>
</div>
<div className="test">
  <form >
    <fieldset >
      
      <label htmlFor="bot_name">
        Name your bot:

        <input type="text" id="bot_name" name="bot_name"/>
      </label>
      <div></div>
      <label htmlFor="boole_value">
        Choose a Boolean Value:
        <select id="boole_value" name="boole_value">
          <option value="1">1</option>
          <option value="0">0</option>
        </select>
      </label>
      <label htmlFor="boole_op">
        Choose Boolean Operator:
        <select id="boole_op" name="boole_op">
          <option value="and">AND</option>
          <option value="or">OR</option>
          <option value="not">NOT</option>
          <option value="nor">NOR</option>
        </select>
      </label>
      <label htmlFor="bot_speed">
        Choose Speed:
        <input id="bot_speed" type="range" min={0} max={100} />
      </label>
      <label htmlFor="bot_direction">
        Bot Direction:
        <select>
          <option value="north">NORTH</option>
          <option value="south">SOUTH</option>
          <option value="east">EAST</option>
          <option value="west">WEST</option>
        </select>
      </label>
      <button >Submit</button>
    </fieldset>
  </form>
</div>
</>
  )}

