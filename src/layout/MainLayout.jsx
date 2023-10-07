import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <div className='absolute top-0 left-0 -z-10'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default MainLayout;