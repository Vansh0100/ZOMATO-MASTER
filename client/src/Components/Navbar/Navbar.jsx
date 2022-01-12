import React,{useState} from 'react'
import {HiLocationMarker} from "react-icons/hi"
import {FaUserAlt} from "react-icons/fa";
import {IoMdArrowDropdown} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";

// redux
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/reducers/auth/auth.action";

// Import Components
import Signup from '../Auth/SignUp';
import Signin from '../Auth/SignIn';
function NavSm({Signin,Signup}){
   
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const reduxState = useSelector((globalState) => globalState.user.user.user);
  const dispatch = useDispatch();
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-red-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {reduxState?.fullName ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border border-gray-300 text-red-400 w-20 h-20 rounded-full"
            >
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg"
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={() => dispatch(signOut())}>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-red-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={Signin}>Sign In</button>
                <button onClick={Signup}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
function NavLg({Signup,Signin}){ const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const reduxState = useSelector((globalState) => globalState.user.user.user);
  const dispatch = useDispatch();
    return (
      <>
        <div className="hidden lg:inline container px-20 mx-auto">
          <div className="gap-4 w-full items-center justify-around flex">
            <div className="w-28">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt=""
              />
            </div>
            <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded ">
              <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                <span className="text-red-400">
                  <HiLocationMarker />
                </span>
                <input
                  type="text"
                  placeholder="Gonda(U.P)"
                  className="w-full focus:outline-none"
                />
                <IoMdArrowDropdown />
              </div>
              <div className="flex w-full items-center gap-2">
                <RiSearch2Line />
                <input
                  type="search"
                  placeholder="Search for restaurant, cuisine or a dish"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            {reduxState?.fullName ? (
              <div className="relative w-20">
                <div
                  onClick={() => setIsDropDownOpen((prev) => !prev)}
                  className="border border-gray-300 text-red-400 w-full h-20 rounded-full"
                >
                  <img
                    src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg"
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {isDropDownOpen && (
                  <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                    <button  onClick={() => dispatch(signOut())}>Sign Out</button>
                  </div>
                )}
              </div>
            ) : (
              <div className=" flex gap-4">
                <button className="text-gray-500 text-xl hover:text-gray-800" onClick={Signin}>
                  Login
                </button>
                <button className="text-gray-500 text-xl hover:text-gray-800" onClick={Signup}>
                  Signup
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
}

function Navbar() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openSignInModal = () => setOpenSignIn(true);
  const openSignUpModal = () => setOpenSignUp(true);
    return (
        <>
        <Signin isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <Signup isOpen={openSignUp} setIsOpen={setOpenSignUp} />
            <nav className='p-4 flex bg-white shadow-md lg:shadow-none w-full items-center'>
            <NavSm Signin={openSignInModal} Signup={openSignUpModal} />
            <NavLg Signin={openSignInModal} Signup={openSignUpModal} />
            </nav>
        </>
    )
}

export default Navbar
