import { Link } from 'react-router-dom';
import {
  featuresPageData,
  homePageData,
  storiesPageData,
} from '../assets/data';
import arrow from '../assets/shared/desktop/arrow.svg';
import lightArrow from '../assets/shared/desktop/light-arrow.svg';

const Home = () => {
  return (
    <main className='home-page d-flex flex-col'>
      <section className='d-flex flex-col'>
        {homePageData.map((item, index) => {
          const {
            title,
            text,
            images: { desktop, tablet, mobile },
          } = item;
          const isOddIndex = index % 2 === 0;
          const isFirstElement = index === 0;
          return (
            <article
              key={index}
              className={` home-article d-flex  ${
                isOddIndex ? 'row-reversed' : ''
              }`}
            >
              <div
                className={`home-img-container ${
                  isOddIndex && 'home-img-container-inverse'
                }`}
              >
                <picture>
                  <source media='(max-width:375 )' srcSet={mobile} />
                  <source media='(max-width: 650px)' srcSet={desktop} />
                  <source media='(max-width:950px )' srcSet={tablet} />
                  <img src={desktop} alt='' />
                </picture>
              </div>
              <div
                className={`hero-article d-flex align-center ${
                  isFirstElement && 'bg-dark'
                }`}
              >
                <div
                  className={`article-text d-flex flex-col align-center ${
                    isFirstElement ? 'text-clr-light' : ''
                  } `}
                >
                  <h1 className='heading-one bold uppercase'>{title}</h1>
                  <p
                    className={`body-text ${
                      isFirstElement ? 'opacity-60' : ''
                    } `}
                  >
                    {text}
                  </p>
                  <Link
                    className={`cta-section d-flex align-center bold uppercase text-clr-${
                      isFirstElement ? 'light' : 'dark'
                    }`}
                    to={`${isFirstElement ? 'pricing' : 'stories'}`}
                  >
                    {isFirstElement ? 'get an invite' : 'view the stories'}
                    <img src={isFirstElement ? lightArrow : arrow} alt='' />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <section className='card-section '>
        {storiesPageData
          .filter((_, index) => index < 4)
          .map((item, index) => {
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
                    <p className='card-author text-clr-light bold'>
                      by {author}
                    </p>
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
      <div className='features-section'>
        <ul className='features-list d-flex align-center'>
          {featuresPageData
            .filter((_, index) => index < 3)
            .map((item, index) => {
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
      </div>
    </main>
  );
};

export default Home;
