'use client';

import { useState } from 'react';
import Cart from "../components/Cart"
import { useBooleanValue } from '../app/context/CartBoolContext';
import { useCart } from '../app/context/CartContext';
import {
  Menu,
  X,
  Search,
  ShoppingCart,
} from 'lucide-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();
  const { isBooleanValue, setBooleanValue } = useBooleanValue();



  const handleClickc = () => {
    var cartb = document.getElementById("cartid");
    var cartb2 = document.getElementById("cartid2");
    setBooleanValue(!isBooleanValue);
    if (cartb && cartb2) {
      if (isBooleanValue) {
        cartb2.className += " MiniCart_Cart-visible";
      }
      else {
        cartb2.classList.remove("MiniCart_Cart-visible");
      }
    }
  };





  return (

    <>
      <Cart />

      <header
        className="w-full sticky top-9"
        style={{
          background: '#ffffff',
        }}
      >
        <div className="px-4   flex items-center text-black relative mynavidhere">
          {/* Hamburger - only on mobile, left */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center space-x-2"
          >
            <Menu className="w-6 h-6 stroke-[1]" id='myColorblack' />
          </button>

          {/* Logo - center on mobile, left on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 flex justify-center sm:justify-start items-center flex-1 sm:flex-none">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dzfuvfl10/image/upload/v1755185249/logo-removebg-preview_krrib4.png"
                alt="Logo"
                className="h-20"
                style={{ maxHeight: '70px' }}
              />
            </a>
          </div>

          {/* Desktop menu - center on desktop */}
          <nav className="hidden sm:flex flex-1 justify-center items-center gap-10  " id='mynewNavNav'>
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/shop" className="hover:underline">Shop</a> 
            <a href="/contact" className="hover:underline">Contact Us</a>
          </nav>

          {/* Search & Cart - right on all screens */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            {/* Search */}
<button 
  onClick={() => setSearchOpen(true)} 
  aria-label="Search" 
  id="mySearchColor"
  className='mr-2'
>
  <Search size={20} color="#1f1a17" />
</button>

{/* Cart */}
<span onClick={handleClickc} className="menuicon mr-2">
  <ShoppingCart size={20} color="#1f1a17" />
  
  {cart && cart.length > 0 ? (
    <span className="MiniCart_CartIndicator_Badge1"></span>
  ) : (
    <div></div>
  )}
</span>
          </div>
        </div>

        {/* Fullscreen Menu - only on mobile */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50 sm:hidden">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-10 right-4"
              aria-label="Close menu"
            >
              <X className="w-8 h-8 stroke-[1]" id='myColorblack' />
            </button>
            <nav className="flex flex-col items-center gap-6 mt-12 text-3xl font-bold">
              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/shop" onClick={() => setMenuOpen(false)}>Shop</a> 
              <a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
            </nav>
          </div>
        )}

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50">
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-10 right-4"
              aria-label="Close search"
            >
              <X className="w-8 h-8 stroke-[1]" id='myColorblack' />
            </button>

            <form action={'/search'} method="get" className="searchOverlay">
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.6 36">
                  <path d="M35 32.6l-8.4-8.4A14.96 14.96 0 0 0 14.9 0C6.7 0 0 6.7 0 14.9s6.7 14.9 14.9 14.9c3.3 0 6.3-1.1 8.8-2.9l8.5 8.5c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8zM4 14.9C4 8.9 8.9 4 14.9 4s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9S4 20.9 4 14.9z" />
                </svg>
              </button>

              <input
                type="text"
                name="q"
                placeholder="Search..."
                className="w-3/4 max-w-md text-2xl border-b-2 border-gray-400 outline-none py-2 text-center"
                autoFocus
              />
            </form>
          </div>
        )}

        {/* Cart Overlay */}
        {cartOpen && (
          <div className="fixed inset-0 bg-white text-black z-50 overflow-y-auto">
            <button
              onClick={() => setCartOpen(false)}
              className="absolute top-4 right-4"
              aria-label="Close cart"
            >
              <X className="w-8 h-8 stroke-[1]" />
            </button>
            <div className="mt-20 px-4">
              <Cart />
            </div>
          </div>
        )}
      </header>

    </>

  );
}