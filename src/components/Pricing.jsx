import heroDesktop from '../assets/pricing/desktop/hero.jpg';
import heroTablet from '../assets/pricing/tablet/hero.jpg';
import heroMobile from '../assets/pricing/mobile/hero.jpg';
import Beta from './Beta';

const Pricing = () => {
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
              pricing
            </h1>
            <p className='body-text text-clr-light opacity-60'>
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It&apos;s the simple way to create and
              share your photos.
            </p>
          </div>
        </article>
      </section>
      <Beta />
    </main>
  );
};

export default Pricing;
