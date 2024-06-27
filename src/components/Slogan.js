import '../scss/Slogan.scss';

import { RiLeafLine, RiHeartPulseLine } from '@remixicon/react';

function Slogan() {
    return (
        <div id="slogan" className="slogan">
            <div className='slogan__container'>
                <ul className='slogan__list'>
                    <li className='slogan__item'>
                        <RiLeafLine />
                        <span>GOOD FOR NATURE</span>
                    </li>
                    <li className='slogan__item'>
                        <RiHeartPulseLine />
                        <span>LOW CALORIES</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Slogan;