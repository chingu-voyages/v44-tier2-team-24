import { Outlet } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Container from '../Components/Layout/Container';
function RootLayout() {
    return (
        
        <>
        <Navigation />
        <Outlet />
        <Footer />
        </>
        
    )
}

export default RootLayout;
