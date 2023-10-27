import SideBar from "./Sidebar/page";

const DashboardLayout = ({ children }) => {
    return (
        
        <>
            <div className="w-48 h-screen bg-gray-800 text-white p-4 fixed top-0 left-0">
                <SideBar></SideBar>
            </div>
            {children}
        </>

    );
};

export default DashboardLayout;