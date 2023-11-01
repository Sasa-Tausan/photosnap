import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { menuList } from '../assets/data';
import Button from './Button';
import { MyContext } from './MyContext';

const MobileMenu = () => {
  const { resetOpenMenu } = useContext(MyContext);
  return (
    <nav className='mobile-nav flex-col align-center'>
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
              onClick={resetOpenMenu}
            >
              {name}
            </NavLink>
          );
        })}
      <hr className='menu-divider' />
      <Button />
    </nav>
  );
};

export default MobileMenu;
