// Navbar.js
"use client";
// Navbar.js

import { useState } from 'react';
import Link from 'next/link';
import "./main.css"
const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState( false );

  const toggleMenu = () => {
    setIsMenuOpen( !isMenuOpen );
  };

  return (
    <nav>
      <div className={`menu-toggle ${ isMenuOpen ? 'open' : '' }`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${ isMenuOpen ? 'open' : '' }`}>
        <div className="flex gap-20 bg-white justify-between pl-4 pr-10 text-black p-4">
          <div>
            <h1>logo</h1>
          </div>
          <div className="flex gap-4 bg-white text-black">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li className="dropdown">
              <a href="#">COMPANY</a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="company/vision&mission">Vision & mission</Link>

                    <Link href="/company/Team">Team </Link>
                    <Link href="/company/CAREERS">CAREERS</Link>
                    <Link href="/company/Blogs">BLOGS</Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">INDUSTRIES</a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/INDUSTRIES/BFSI">BFSI</Link>

                    <Link href="/services/service2">B2B</Link>
                    <Link href="/services/service3">HEALTHCARE  </Link>
                    <Link href="/services/service3">EDUCATION   </Link>
                  </div>

                </div>
              </div>
            </li>
           <Link href="/BLOGS">BLOGS</Link>
           <Link href="/CONTACT">CONTACT</Link>
          </div>
        </div>
      </ul>
  <ul className={`menu ${ isMenuOpen ? 'open' : '' }`}>
        <div className="flex gap-20 bg-white justify-center text-black p-4">

          <div className="flex gap-4 bg-white text-black">

            <li className="dropdown">
              <a href="#">SEO</a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/service1">SEO SERVICES</Link>

                    <Link href="/services/service2">ENTERPRISE SEO  </Link>
                    <Link href="/services/service3">E-COMMERCE SEO</Link>
                    <Link href="/services/service3">LOCAL SEO</Link>
                    <Link href="/services/service3">SEO RESELLER SERVICES</Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">APP MARKETING</a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/service1">APP STORE OPTIMIZATION (ASO)</Link>
                    <Link href="/services/service2">PAID MARKETING</Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">CONTENT MARKETING </a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/service1">END TO END CONTENT MARKETING </Link>

                    <Link href="/services/service2">GUEST POSTING </Link>
                    <Link href="/services/service3">QUORA MARKETING  </Link>
                    <Link href="/services/service3">DIGITAL MARKETING   </Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">PAID MARKETING </a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/service1">PPC SERVICES</Link>

                    <Link href="/services/service2">RE-MARKETING  SERVICES </Link>
                    <Link href="/services/service3">MOBILE ADVERTISEMENT  </Link>
                    <Link href="/services/service3">AMAZON ADS   </Link>
                    <Link href="/services/service3">PPX RESELLER SERVICES   </Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">DESIGN & DEVELOPMENT  </a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/service1">WEBSITE DESIGN SERVICES</Link>

                    <Link href="/services/service2">MOBILE WEBSITE DESIGN  </Link>
                    <Link href="/services/service3">E-COMMERCE WEBSITE DESIGN   </Link>
                    <Link href="/services/service3">WORDPRESS WEBSITE DEVELOPMENT  </Link>
                  </div>

                </div>
              </div>
            </li>
          </div>
        </div>
      </ul>

    </nav>
  );
};

export default Navbar;
