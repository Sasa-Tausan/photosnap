import appalaciaDesktop from '../assets/stories/desktop/moon-of-appalacia.jpg';
import appalaciaTablet from '../assets/stories/tablet/moon-of-appalacia.jpg';
import appalaciaMobile from '../assets/stories/mobile/moon-of-appalacia.jpg';
import lightArrow from '../assets/shared/desktop/light-arrow.svg';
import { storiesPageData } from '../assets/data';
import { Link } from 'react-router-dom';

const Stories = () => {
  return (
    <main className='full-width d-flex flex-col'>
      <section className='hero-section'>
        <picture>
          <source media='(max-width:375px )' srcSet={appalaciaMobile} />
          <source media='(max-width: 768px)' srcSet={appalaciaTablet} />
          <img src={appalaciaDesktop} alt='' />
        </picture>
        <article className='hero-content-container d-flex flex-col align-center justify-center'>
          <div className='hero-content d-flex flex-col'>
            <p className='fs-12 text-clr-light bold ls-2'>
              LAST MONTH&apos;S FEATURED STORY
            </p>
            <div className=' d-flex flex-col  gap-16'>
              <h1 className='heading-one text-clr-light bold'>
                HAZY FULL MOON OF APPALACHIA
              </h1>
              <p className='fs-12 text-clr-light d-flex align-center gap-16'>
                <span className='opacity-75'>March 2nd 2020</span>by John
                Appleseed
              </p>
            </div>
            <p className='body-text text-clr-light opacity-60'>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called &ldquo;mountains&rdquo;,
              especially in eastern Kentucky and West Virginia, and while the
              ridges are not high, the terrain is extremely rugged.
            </p>
            <p className='d-flex align-center gap-16 fs-12 text-clr-light ls-2 uppercase'>
              read te story
              <img src={lightArrow} alt='' />
            </p>
          </div>
        </article>
      </section>
      <section className='card-section '>
        {storiesPageData.map((item, index) => {
          const {
            title,
            author,
            images: { desktop, mobile },
          } = item;
          return (
            <div key={index} className='card'>
              <picture>
                <source media='(max-width:650px )' srcSet={mobile} />
                {<img src={desktop} alt='' className='card-picture' />}
              </picture>
              <div className='hover-element'></div>
              <div className='card-content d-flex flex-col'>
                <div className='d-flex flex-col'>
                  <p className='card-title text-clr-light bold'>{title}</p>
                  <p className='card-author text-clr-light bold'>by {author}</p>
                </div>
                <hr className='card-divider' />
                <Link className='card-cta d-flex align-center space-between'>
                  <p className='card-cta-title text-clr-light bold uppercase ls-2'>
                    read story
                  </p>
                  <img src={lightArrow} alt='' />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Stories;
