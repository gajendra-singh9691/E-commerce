import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const Nav = ({ fun, addtocart }) => {
  const nav = useRef()
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        nav.current.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        nav.current.style.backgroundColor = "white";
      } else {
        nav.current.style.boxShadow = 'none';
        nav.current.style.backgroundColor = "transparent"
      }
    };
    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);
  },);

  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div ref={nav} className='fixed w-full top-0 flex items-center justify-between text-black p-2 md:p-4 z-45 duration-100 transition-all'>
      <div>
        <Link onClick={top} to='/' className='uppercase text-sm sm:text-lg md:text-2xl font-extrabold cursor-pointer'>yoursretrohubz</Link>
      </div>
      <div className='flex gap-2 sm:gap-8 items-center'>
        <Link onClick={top} to="/cricket-jersey" className='text-lg md:text-xl cursor-pointer'>Cricket</Link>
        <Link onClick={top} to="/football-jersey" className='text-lg md:text-xl cursor-pointer'>FootBall</Link>
        <button onClick={() => { fun(!addtocart) }}>
          <FontAwesomeIcon icon={faCartShopping} className='cursor-pointer' />
        </button>
      </div>
    </div>
  )
}

export default Nav
