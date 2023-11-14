"use client"
import ResponsiveDrawer from "@/Components/ResponsiveDrawer/ResponsiveDrawer";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
    return (

        <div className="flex">
            <div className="">
                {/* <SideBar></SideBar> */}
                <ResponsiveDrawer></ResponsiveDrawer>
            </div>
            <div className="pt-12 container">
                {children}
            </div>
            
        </div>

    );
};

export default DashboardLayout;