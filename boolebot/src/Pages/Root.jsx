import { Outlet } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Hamburger from '../Components/Hamburger';
import Container from '../Components/Layout/Container';
function RootLayout() {
    return (
        
        <div className='project'>
        <Navigation />

        <Hamburger />
            {/* <Container> */}
                <Outlet />
            {/* </Container> */}

        <Footer />
        </div>
        
    )
}

export default RootLayout;
