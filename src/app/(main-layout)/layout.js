import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
<<<<<<< HEAD



=======
>>>>>>> 8ccd25d6d744541e1a058a898ad1b5e00b234a1b
import Providers from '@/providers';

const MainLayout = ({ children }) => {
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