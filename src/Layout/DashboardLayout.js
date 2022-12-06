import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import NavBar from '../Pages/Shared/NavBar/NavBar'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div className='bg-gradient-to-b from-green-100 to-green-100 overflow-x-hidden'>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" >
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                </div>
                <div className="drawer-side mt-12" data-aos="fade-right" data-aos-duration="3000">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className=" menu p-4 w-80 text-base-content">
                        <button className='my-4 w-52  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500'><Link to={'/dashboard'}>My Appointments</Link></button>
                        {
                            isAdmin && <>
                                <button className='my-4 w-52  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500'><Link to={'/dashboard/allusers'}>All Users</Link></button>
                                <button className='my-4 w-52  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500'><Link to={'/dashboard/adddoctor'}>Add Doctor</Link></button>
                                <button className='my-4 w-52  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500'><Link to={'/dashboard/managedoctors'}>Manage Doctor</Link></button>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;