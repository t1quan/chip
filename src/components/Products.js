import '../scss/Products.scss';
import { assets } from '../assets/Assets';
import { RiShoppingBag3Line } from '@remixicon/react';

function Products() {
    return (
        <div id="products" className="products section">
            <h2 className='section__title'>BEST SELLING <br /> PRODUCT</h2>
            <div className="products__container container">
                <div className='products__content grid'>
                    <article className='products__card'>
                        <img src={assets.productChip1} alt='' className='products__img' />

                        <span className='products__subtitle'>Crab</span>
                        <h2 className='products__title'>Chips</h2>

                        <span className='products__price'>$8</span>

                        <button className='products__button'>
                            <RiShoppingBag3Line />
                        </button>
                    </article>

                    <article className='products__card'>
                        <img src={assets.productChip2} alt='' className='products__img' />

                        <span className='products__subtitle'>Cheese</span>
                        <h2 className='products__title'>Chips</h2>

                        <span className='products__price'>$5</span>

                        <button className='products__button'>
                            <RiShoppingBag3Line />
                        </button>
                    </article>

                    <article className='products__card'>
                        <img src={assets.productChip3} alt='' className='products__img' />

                        <span className='products__subtitle'>BBQ</span>
                        <h2 className='products__title'>Chips</h2>

                        <span className='products__price'>$6</span>

                        <button className='products__button'>
                            <RiShoppingBag3Line />
                        </button>
                    </article>

                    <article className='products__card'>
                        <img src={assets.productChip4} alt='' className='products__img' />

                        <span className='products__subtitle'>Hot</span>
                        <h2 className='products__title'>Chips</h2>

                        <span className='products__price'>$5</span>

                        <button className='products__button'>
                            <RiShoppingBag3Line />
                        </button>
                    </article>

                    <article className='products__card'>
                        <img src={assets.productChip5} alt='' className='products__img' />

                        <span className='products__subtitle'>Mix</span>
                        <h2 className='products__title'>Chips</h2>

                        <span className='products__price'>$10</span>

                        <button className='products__button'>
                            <RiShoppingBag3Line />
                        </button>
                    </article>
                </div>

                <img src={assets.crab} alt='' className='products__crab' />
                <img src={assets.hamburger} alt='' className='products__hamburger' />
                <img src={assets.cheese} alt='' className='products__cheese' />
            </div>
        </div>
    );
}

export default Products;