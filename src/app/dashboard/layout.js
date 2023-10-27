import SideBar from "@/Components/Sidebar/page";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
    return (

        <>
            <div className="w-48 h-screen bg-gray-800 text-white p-4 fixed top-0 left-0">
                <SideBar></SideBar>
            </div>
            <div className="ml-48">
                {children}
            </div>
            
        </>

    );
};

export default DashboardLayout;