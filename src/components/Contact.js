import '../scss/Contact.scss';
import { assets } from '../assets/Assets';
import { RiWhatsappLine, RiMessengerLine, RiMailLine } from '@remixicon/react';

function Contact() {
    return (
        <div id="contact" className="contact section">
            <div className='contact__container container'>
                <h2 className='section__title'>CONTACT US TO <br /> EAT CHIPS</h2>

                <div className='contact__content grid'>
                    <div className='contact__data grid'>
                        <div>
                            <h3 className='contact__title'>Write to us</h3>
                            <div className='contact__social'>
                                <a href='/' target='_blank'>
                                    <RiWhatsappLine />
                                </a>
                                <a href='/' target='_blank'>
                                    <RiMessengerLine />
                                </a>
                                <a href='/' target='_blank'>
                                    <RiMailLine />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className='contact__title'>Call us</h3>
                            <address className='contact__info'>
                                +00-987-7654-321 <br />
                                +11-012345
                            </address>
                        </div>

                        <div>
                            <h3 className='contact__title'>Find us here</h3>
                            <address className='contact__info'>
                                Lima - Sun City - Peru <br />
                                Av. Moon #4321
                            </address>
                        </div>
                    </div>
                    <img src={assets.contactMan} alt='' className='contact__img' />
                </div>

                <img src={assets.shrimp} alt='' className='contact__shrimp' />
                <img src={assets.crab} alt='' className='contact__crab' />
                <img src={assets.meat} alt='' className='contact__meat' />
            </div>
        </div>
    );
}

export default Contact;