import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar';
import Providers from '@/providers';

const MainLayout = ({children}) => {
    return (
        <div>
            <Providers>
                <Navbar></Navbar>
            {children}
            <Footer></Footer>
            </Providers>
        </div>
    );
};

export default MainLayout;