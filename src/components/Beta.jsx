import { Link } from 'react-router-dom';
import lightArrow from '../assets/shared/desktop/light-arrow.svg';

const Beta = () => {
  return (
    <section className='beta-section full-width '>
      <div className='container beta-container d-flex align-center space-between'>
        <div className='beta-invite-content'>
          <h1 className='heading-one bold text-clr-light uppercase'>
            We&apos;re in beta. Get your invite today!
          </h1>
        </div>
        <Link
          to='pricing'
          className='cta-content d-flex align-center gap-16 fs-12 text-clr-light bold ls-2 uppercase'
        >
          <span>get an invite</span>
          <img src={lightArrow} alt='' />
        </Link>
      </div>
    </section>
  );
};

export default Beta;
