import { Link } from 'react-router-dom';
import "./Navigation.css";


function Navigation() {
    return (
      <header>
        <nav>
            <Link to="/"><h1>BooleBots</h1></Link>
           <ul>
            <li>
              <Link to="/createBot">Create Bots</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          
        </nav>
      </header>
    );
}

export default Navigation;