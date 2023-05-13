import { Outlet } from 'react-router-dom';

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    )
}

export default RootLayout;