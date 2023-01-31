import Title from './Title';
import { services } from '../data';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='Υπηρεσιες' spanTitle='μας' />

      <div className='section-center featured-center'>
        {services.map((service) => {
          const { id, image, date, title, info } = service;
          return (
            <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt={title} />
                <p className='tour-date'>{date}</p>
              </div>
              {/* <!-- tour info --> */}
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className='tour-footer'></div>
              </div>
            </article>
          );
        })}

        <div className='tour-btn'>
          <a href='#' className='btn'>
            all υπηρεσίες
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
