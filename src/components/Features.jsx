import heroDesktop from '../assets/features/desktop/hero.jpg';
import heroTablet from '../assets/features/tablet/hero.jpg';
import heroMobile from '../assets/features/mobile/hero.jpg';
import { featuresPageData } from '../assets/data';
import Beta from './Beta';

const Features = () => {
  return (
    <main className='full-width d-flex flex-col'>
      <section className='main-article d-flex row-reversed'>
        <div className='img-container-inverse'>
          <picture>
            <source media='(max-width:375px )' srcSet={heroMobile} />
            <source media='(max-width:650px )' srcSet={heroDesktop} />
            <source media='(max-width:950px )' srcSet={heroTablet} />
            <img src={heroDesktop} alt='' />
          </picture>
        </div>
        <article className='hero-article d-flex align-center bg-dark'>
          <div className='article-text d-flex flex-col'>
            <h1 className='heading-one text-clr-light bold uppercase'>
              features
            </h1>
            <p className='body-text text-clr-light opacity-60'>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </article>
      </section>
      <section className='features-section'>
        <ul className='features-page-list align-center'>
          {featuresPageData.map((item, index) => {
            const { img, title, text } = item;
            return (
              <li key={index} className='features-item d-flex flex-col'>
                <img src={img} alt='' />
                <div className='features-content d-flex flex-col text-clr-dark'>
                  <h3 className='heading-three bold '>{title}</h3>
                  <p className='body-text opacity-60'>{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <Beta />
    </main>
  );
};

export default Features;
