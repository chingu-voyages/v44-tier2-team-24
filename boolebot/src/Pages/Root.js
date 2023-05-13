import { Outlet } from 'react-router-dom';
import Navigation from '../Components/Navigation';

function RootLayout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default RootLayout;