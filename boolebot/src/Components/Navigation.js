import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <header>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                </nav>
        </header>
    );
}

export default MainNavigation;