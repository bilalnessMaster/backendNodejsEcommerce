import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../app.css";
import { useCarteStore } from "../Stores/useCarteStore";
import ShoppingCart from "./ShoppingCart";
import avatar from '../assets/avatar.png'
import { useUserStore } from "../Stores/useUserStore";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user } = useUserStore()
  const {cartItems} = useCarteStore()
  const [isDrop  , setIsDrop] = useState(false)

  return (
    
<>
    <header className=" top-0 max-w-screen-2xl mx-auto py-4 text-lg ">
      <nav className="container  mx-auto flex items-center justify-between ">
        <ul className=" justify-center items-center gap-5 hidden md:flex">
          <li>
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-600" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-600" to="/">
              Page
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-600" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          {/* logo */}
          <Link to="/" className="font-play text-4xl">
            Lebab<span className="text-orange-400">.</span>
          </Link>
        </div>
        {/* nav icons */}

        <div className="flex items-center gap-5 relative">
          <span>
            <Link to="/search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button disabled={ user ? false : true}
              onClick={() => setIsOpen(!isOpen)}
              className="relative hover:text-red-600"
            >
              <i className="ri-shopping-bag-line"></i>
              <span className="absolute -top-1 -right-3  w-fit px-[5px] text-sm  rounded-full text-white bg-red-600">
                {cartItems.length}
              </span>
            </button>
          </span>
          <span>
          { user && user ? <div className="relative w-fit"> <img src={user?.profileImage || avatar } onClick={()=>setIsDrop(!isDrop)} className="h-7 w-7 cursor-pointer rounded-full object-cover" alt=""  /> {isDrop ?<Menu />:""} </div> :  <Link to="/login">
              <i className="ri-user-line"></i>
            </Link>}
          </span>
        </div>
      </nav>
    </header>
      {isOpen && <ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen} />}
      </>
  );
};

const Menu=({isDrop}) =>{
  const {user , Logout } = useUserStore()
  return (
    <div className="absolute right-1/2 capitalize bg-white drop-shadow-md px-3 w-40 rounded py-2 flex space-y-1 justify-center items-start flex-col  top-9 z-50">
      <Link to="/profile" className="hover:bg-gray-100 rounded  py-1 w-full "><i className="ri-profile-line"></i> profile</Link>
      {user?.role === "admin" ? <Link to='/dashboard' className="hover:bg-gray-100 rounded  py-1 w-full "><i className="ri-dashboard-line"></i> Dashboard</Link> : null}
      <div className="border-separate border-gray-500"></div>
      <Link onClick={Logout} className="hover:bg-gray-100 rounded  py-1 w-full text-red-500"><i className="ri-logout-box-line"></i> logout</Link>
    </div>
  )
}
export default NavBar;
