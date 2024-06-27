import '../scss/Footer.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { RiArrowUpLine } from '@remixicon/react';
import { useState } from 'react';

function Footer() {

    const [scrollup, setScrollup] = useState(false);

    const toggleScrollup = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled >= 350) {
            setScrollup(true);
        }
        else {
            setScrollup(false);
        }
    }

    const HandleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleScrollup);

    return (
        <Fragment>
            <div className='footer' id='footer'>
                <div className='footer__container container grid'>
                    <Link to='/' className="footer__logo">CHIPS</Link>

                    <div className='footer__content grid'>
                        <Link to='/' className="footer__link">Terms & Agreements</Link>
                        <Link to='/' className="footer__link">Privacy Policy</Link>

                        <span className='footer__copy'>&#169; All Rights Reserved By Bedimcode</span>
                    </div>
                </div>
            </div>

            <button className={scrollup ? 'scrollup show' : 'scrollup'} onClick={HandleScroll}>
                <RiArrowUpLine />
            </button>
        </Fragment>
    );
}

export default Footer;