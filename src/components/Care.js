import '../scss/Care.scss';
import { assets } from '../assets/Assets';
import { RiPlantLine, RiFireLine, RiHeartPulseLine, RiHandHeartLine } from '@remixicon/react';

function Care() {
    return (
        <div id="care" className="care section">
            <h2 className="section__title">ENJOY AND TAKE <br /> CARE OF YOUR HEALTH</h2>

            <div className='care__container container grid'>
                <ul className='care__list'>
                    <li className='care__item'>
                        <RiPlantLine />
                        <p>The potatoes that are made into snacks are grown and harvested and are 100% organic.</p>
                    </li>
                    <li className='care__item'>
                        <RiFireLine />
                        <p>We fry the fries with vegetable and natural oil for good care.</p>
                    </li>
                    <li className='care__item'>
                        <RiHeartPulseLine />
                        <p>The potatoes are not processed, once cleaned they are cooked without preservatives.</p>
                    </li>
                    <li className='care__item'>
                        <RiHandHeartLine />
                        <p>They contain fewer calories and less fat for good health.</p>
                    </li>
                </ul>

                <img src={assets.careChip} alt="" className='care__img' />
            </div>
        </div>
    );
}

export default Care;