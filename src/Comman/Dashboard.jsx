import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (

    <>
     
      <div className="flex ml-0 w-[200px] h-full">
        
        <div className="bg-gray-400 h-full w-[200px] text-white  p-4">
          <nav className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 px-4 py-2 bg-yellow-300 text-black rounded">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m2 7a2 2 0 01-2 2H5a2 2 0 01-2-2 2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link to="/Category" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 hover:text-black rounded">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <span>Category</span>
            </Link>
            <Link to="/subcategory" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 hover:text-black rounded">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0-1.657-1.343-3-3-3S6 6.343 6 8s1.343 3 3 3 3-1.343 3-3zm0 8c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zM18 8c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 8c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z" />
              </svg>
              <span>Subcategory</span>
            </Link>
            <Link to="/products" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 hover:text-black rounded">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zM4 8h16" />
              </svg>
              <span>Products</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
