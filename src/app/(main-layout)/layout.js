import Footer from '@/Components/Footer/Footer';
import NavBar from '@/Components/Navbar';

const MainLayout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;