import { assets } from "../assets/Assets";
import '../scss/Banner.scss';

function Banner() {
    return (
        <div id="banner" className="banner section">
            <div className="banner__container container grid">
                <div className="banner__data">
                    <h1 className="banner__title">SNACK <br /> WITH NO <br /> LIMITS</h1>
                    <p className="banner__description">When you are hungry and don't have time to cook, snacks are the perfect solution, always prepare for midday hunger.</p>
                    <img src={assets.meat} alt="" className="banner__meat" />
                    <div className="banner__button">
                        <a className="button" href="/">Snack Now</a>
                        <a className="button button__ghost" href="/">Buy Now</a>
                    </div>
                </div>
                <div className="banner__images">
                    <div className="banner__circle">
                        <div className="banner__subcircle"></div>
                    </div>
                    <img src={assets.homeChip} alt="" className="banner__img" />

                    <img src={assets.chip1} alt="" className="banner__chip-1" />
                    <img src={assets.chip2} alt="" className="banner__chip-2" />
                    <img src={assets.chip3} alt="" className="banner__chip-3" />
                    <img src={assets.tomato1} alt="" className="banner__tomato-1" />
                    <img src={assets.tomato2} alt="" className="banner__tomato-2" />
                    <img src={assets.leaf3} alt="" className="banner__leaf" />
                </div>
            </div>
        </div>
    );
}

export default Banner;