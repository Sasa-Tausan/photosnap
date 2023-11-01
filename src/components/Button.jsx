import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './MyContext';

const Button = () => {
  const { resetOpenMenu } = useContext(MyContext);
  return (
    <Link
      to='pricing'
      className='btn-one bg-dark body-text text-clr-light bold uppercase'
      onClick={resetOpenMenu}
      aria-label='Get an invite and view pricing'
    >
      get an invite
    </Link>
  );
};

export default Button;
