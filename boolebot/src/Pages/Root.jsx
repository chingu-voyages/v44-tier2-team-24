import { Outlet } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';

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