import React from 'react'
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

    var mob = document.getElementById('mobile-menu');
    function MobileMenu(){
    mob.classList.toggle('openmenu');
    }
  return (
    <header>
        <div className="mobile-menu" id="mobile-menu">
            <div className="off-canvas">
                <div className="offcanvas-section">
                <button id="mobile-close" onClick={MobileMenu}><i className="fa-solid fa-xmark"></i></button>
                    <div className="off-canvas-top">
                        <form action="">
                            <input type="text" placeholder="Search..."/>
                            <button id="search-submit" type="submit">Search</button>
                        </form>
                    </div>
                <ul className="main-menu d-lg-flex my-auto pe-3 col-lg-10 flex-wrap">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Elements</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="topbar">
            <div className="container">
                <div className="row py-2" style={{borderBottom: "1px solid #ddd"}}>
                    <div className="col-6">
                        <div>Welcome to Riode store message or remove it!</div>
                    </div>
                    <div className="col-6 float-end topbar-right">
                        <div className="d-flex float-end">
                            <div className="info d-flex mx-2"><button id="info-btn"><i
                                        className="fa-solid fa-circle-info pe-1"></i><span>Need Help</span></button></div>
                            <div><button id="register-btn"><i className="fa-solid fa-user"></i></button><span>Sign
                                    in/Register</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-bar">
            <div className="container">
                <div className="row py-3">
                    <div className="col-2 col-lg-2">
                        <div className="d-flex">
                            <button className="d-block d-lg-none me-2" id="mobile-icon" onClick={MobileMenu}>
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <img width="154" height="43"
                            src="https://d-themes.com/wordpress/riode/demo-4/wp-content/uploads/sites/8/2021/01/Logo.png"
                            alt=""/>  
                        </div>
                        </div>
                    <div className="col-lg-7 my-auto d-none d-lg-block" id="menu-row">
                        <div className="row">
                            <ul className="main-menu d-lg-flex my-auto pe-3 col-lg-10 flex-wrap">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/products/1'>Category</Link></li>
                                <li><Link to='/products'>Products</Link></li>
                                <li><Link to='/about'>About</Link></li>
                            </ul>
                            <div className="search-box col-lg-2 hi"><button id="search-btn">
                                <SearchIcon></SearchIcon>
                                </button></div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-3 my-auto hi d-flex menu-btns">
                        <div className="telephone pe-2 d-none d-md-block"><button className="d-flex" id="telephone">
                            <LocalPhoneIcon className='me-2'></LocalPhoneIcon>
                            <span className="d-none d-lg-block">(800) 414-1769</span></button></div>
                        <div className="wish-list pe-2"><button id="wish-list"><i className="fa-regular fa-heart"></i></button>
                        </div>
                        <div className="shopping-cart"><button id="cart"><i className="fa-solid fa-bag-shopping"></i><span
                                    className="cart-count">0</span></button></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Navbar
