import { Link } from 'react-router-dom';
<<<<<<< HEAD
import "./Navigation.css";
// import Container from './Layout/Container';
=======
import styles from './Navigation.module.css'
>>>>>>> arenaLogic

function Navigation() {
    return (
      <header>
        <nav>
            <Link to="/"><h1>BooleBots</h1></Link>
           <ul className={styles.ul}>
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