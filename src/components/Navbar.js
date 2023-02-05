import logo from '../images/implantlogo.png';
import { pageLinks, socialLinks } from '../data';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        {/* <!-- nav header --> */}
        <div className='nav-header'>
          <img
            src={logo}
            className='nav-logo'
            alt=''
            width='32px'
            height='42px'
          />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          <li className='nav-link'>
            <Link to='/'>αρχική</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Praxis'>το ιατρείο</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Service'>υπηρεσίες</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Implants'>εμφυτεύματα</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Robotics'>ρομποτική</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Esthetics'>αισθητική</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Gallery'>photos</Link>
          </li>
          <li className='nav-link'>
            <Link to='/Map'>χάρτης</Link>
          </li>

          {/* {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link'>
                  {link.text}
                </a>
              </li>
            );
          })} */}
        </ul>
        {/* 
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-icon'
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
