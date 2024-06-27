import '../scss/Home.scss';

import Banner from '../components/Banner';
import Favorite from '../components/Favorite';
import Care from '../components/Care';
import Slogan from '../components/Slogan';
import Products from '../components/Products';
import Contact from '../components/Contact';

function Home() {
    return (
        <div className='homePage' id='homePage'>
            <Banner />
            <Favorite />
            <Care />
            <Slogan />
            <Products />
            <Contact />
        </div>
    );
}

export default Home;