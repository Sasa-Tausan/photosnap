import { Link, NavLink } from 'react-router-dom';
import { menuList } from '../assets/data';
import logoLight from '../assets/shared/desktop/logoLight.svg';
import lightArrow from '../assets/shared/desktop/light-arrow.svg';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-dark full-width'>
      <div className='container footer-container pb-64 d-flex space-between'>
        <div className='footer-left-side d-flex'>
          <div className='logo-social-link-container d-flex flex-col'>
            <img src={logoLight} alt='' />
            <SocialLinks />
          </div>

          <nav className='footer-nav d-flex flex-col'>
            {menuList.map((item, index) => {
              const { path, name } = item;
              return (
                <NavLink
                  to={path}
                  key={index}
                  className=' fs-12 text-clr-light bold ls-2 uppercase'
                >
                  {name}
                </NavLink>
              );
            })}
          </nav>
        </div>
        <div className='footer-right-side d-flex flex-col'>
          <Link
            to='pricing'
            className='cta-content d-flex align-center gap-16 fs-12 text-clr-light bold ls-2 uppercase'
          >
            <span>get an invite</span>
            <img src={lightArrow} alt='' />
          </Link>
          <p className='copyright-text text-clr-light'>
            Copyright {year}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
