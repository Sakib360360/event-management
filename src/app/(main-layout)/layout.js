import Footer from '@/Components/Footer/Footer';
import Link from 'next/link';

const MainLayout = ({children}) => {
    return (
        <div>
            <nav>
                <Link href={"/"}>home</Link>
            </nav>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;