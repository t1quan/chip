import { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { RiCloseLargeFill } from "@remixicon/react";
import { RiFacebookCircleLine } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";
import { RiTwitterXLine } from "@remixicon/react";
import { RiApps2Line } from "@remixicon/react";

import '../scss/Header.scss';

function Header() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("show");
    };

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 50);
        })
    }, []);

    return (
        <header id="header" className={scroll ? "header header__shadow" : "header"}>
            <nav className="nav container">
                <Link to="/" className="nav__logo">CHIPS</Link>

                <div className="nav__menu" id="nav__menu" ref={navRef}>
                    <ul className="nav__list">
                        <li onClick={showNav}><Link to="/" className="nav__link">Home</Link></li>
                        <li onClick={showNav}><Link to="/" className="nav__link">Favorites</Link></li>
                        <li onClick={showNav}><Link to="/" className="nav__link">Care</Link></li>
                        <li onClick={showNav}><Link to="/product" className="nav__link">Products</Link></li>
                        <li onClick={showNav}><Link to="/" className="nav__link">Contact</Link></li>
                    </ul>

                    <div className="nav__close" id="nav__close" onClick={showNav}>
                        <RiCloseLargeFill />
                    </div>

                    <div className="nav__social">
                        <a href="https://www.facebook.com/" className="nav__social-link" target="_blank" rel="noreferrer">
                            <RiFacebookCircleLine />
                        </a>
                        <a href="https://www.facebook.com/" className="nav__social-link" target="_blank" rel="noreferrer">
                            <RiInstagramLine />
                        </a>
                        <a href="https://www.facebook.com/" className="nav__social-link" target="_blank" rel="noreferrer">
                            <RiTwitterXLine />
                        </a>
                    </div>
                </div>

                <div className="nav__toggle" onClick={showNav}>
                    <RiApps2Line />
                </div>
            </nav>
        </header>
    );
}

export default Header;