import { Outlet } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';

function RootLayout() {
    return (
        
        <div className='project'>
        <Navigation />            
        <Outlet />
        <Footer />
        </div>
        
    )
}

export default RootLayout;
