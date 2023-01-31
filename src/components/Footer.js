import { pageLinks, socialLinks } from '../data';

const Footer = () => {
  return (
    <footer className='section footer'>
      {/* <!-- footer links --> */}
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                className='footer-icon'
                rel='noreferrer'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      {/* <!-- end of footer icons --> */}
      <p className='copyright'>
        copyright &copy; smiling.gr{' '}
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
