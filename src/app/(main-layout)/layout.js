import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;