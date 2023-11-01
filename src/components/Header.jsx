import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import menuOpen from '../assets/shared/mobile/menu.svg';
import menuClose from '../assets/shared/mobile/close.svg';
import logo from '../assets/shared/desktop/logo.svg';
import { menuList } from '../assets/data';
import MobileMenu from './MobileMenu';
import Button from './Button';
import { MyContext } from './MyContext';

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MyContext);
  return (
    <header className='container pb-28 d-flex align-center space-between'>
      <Link to='/'>
        <img src={logo} alt='Company Logo that is link to Home page' />
      </Link>

      <button className='menu-icon'>
        <img
          src={isMenuOpen ? menuClose : menuOpen}
          alt=''
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </button>

      <nav className='main-nav d-flex align-center gap-36'>
        {menuList
          .filter((item) => item.name !== 'home')
          .map((item, index) => {
            const { path, name } = item;
            return (
              <NavLink
                key={index}
                to={path}
                aria-label={`Navigate to ${name} page`}
                className='body-text text-clr-dark bold ls-2 uppercase'
              >
                {name}
              </NavLink>
            );
          })}
      </nav>
      <div className='btn-container'>
        <Button />
      </div>

      {isMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
