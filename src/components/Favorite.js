import { assets } from "../assets/Assets";
import { Swiper, SwiperSlide } from 'swiper/react';

import '../scss/Favorite.scss';
import 'swiper/css';

function Favorite() {
    return (
        <div id="favor" className="favor section">
            <div className="favor__container container grid">
                <div className="favor__data">
                    <h2 className="section__title">DISCOVER YOUR <br /> FAVORITE FLAVORS</h2>
                    <p className="favor_desc">
                        Try some exotic flavors or delicious toppings. We have collected some delicious snack recipes from around the world for you.
                    </p>

                    <img src={assets.cheese} alt="" className="favor__cheese-1" />
                    <img src={assets.cheese} alt="" className="favor__cheese-2" />
                </div>
                <div className="favor__swiper">
                    <Swiper
                        // loop={true}
                        spaceBetween={10}
                        slidesPerView={1.6}
                        centeredSlides={true}
                        grabCursor={true}
                        breakpoints={{
                            540: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <article className="favor__article">
                                <img src={assets.favorChip1} alt="" className="favor__img" />
                                <img src={assets.leaf1} alt="" className="favor__leaf-1" />
                                <img src={assets.leaf2} alt="" className="favor__leaf-2" />
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="favor__article">
                                <img src={assets.favorChip2} alt="" className="favor__img" />
                                <img src={assets.leaf1} alt="" className="favor__leaf-1" />
                                <img src={assets.leaf2} alt="" className="favor__leaf-2" />
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="favor__article">
                                <img src={assets.favorChip3} alt="" className="favor__img" />
                                <img src={assets.leaf1} alt="" className="favor__leaf-1" />
                                <img src={assets.leaf2} alt="" className="favor__leaf-2" />
                            </article>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Favorite;