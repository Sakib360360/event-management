import Link from 'next/link';

const MainLayout = ({children}) => {
    return (
        <div>
            <nav>
                <Link href={"/"}>home</Link>
            </nav>
            {children}
            <footer>&copy; copyright</footer>
        </div>
    );
};

export default MainLayout;