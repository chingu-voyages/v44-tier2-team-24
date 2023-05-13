import { Link } from 'react-router-dom';
import "./Navigation.css";


function Navigation() {
    return (
      <header>
        <nav>
          <ul>
            <li>
                <h1>BooleBots</h1>
            </li>
            <li>
              <Link to="/">Home</Link>
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