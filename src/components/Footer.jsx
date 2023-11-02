import logoLight from '../assets/shared/desktop/logoLight.svg';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className='bg-dark full-width'>
      <div className='container pb-64 d-flex space-between'>
        <div className='footer-left-side d-flex'>
          <div className='logo-social-link-container d-flex flex-col'>
            <img src={logoLight} alt='' />
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
