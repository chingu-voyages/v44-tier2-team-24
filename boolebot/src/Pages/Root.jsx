import { Outlet } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Hamburger from '../Components/Hamburger';

function RootLayout() {
    return (
        
        <div className='project'>
        <Navigation />

        <Hamburger />
            
                <Outlet />
            

        <Footer />
        </div>
        
    )
}

export default RootLayout;
