import '../scss/Home.scss';

import Banner from '../components/Banner';
import Favorite from '../components/Favorite';

function Home() {
    return (
        <div className='homePage' id='homePage'>
            <Banner />
            <Favorite />
        </div>
    );
}

export default Home;