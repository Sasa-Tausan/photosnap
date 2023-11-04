import heroDesktop from '../assets/pricing/desktop/hero.jpg';
import heroTablet from '../assets/pricing/tablet/hero.jpg';
import heroMobile from '../assets/pricing/mobile/hero.jpg';

import Beta from './Beta';
import { useState } from 'react';
import { pricingPageData } from '../assets/data';
import CompareTable from './CompareTable';
import MobCompareTable from './MobCompareTable';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [plan, setPlan] = useState('pro');

  const handleSwitchSlider = (event) => {
    setIsMonthly(event.target.checked);
  };

  const handlePlan = (subscription) => {
    setPlan(subscription);
  };
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
      <section className='container pricing-section full-width d-flex flex-col align-center'>
        <div className='d-flex align-center gap-36'>
          <label
            className={`switch-text text-clr-dark bold ${
              isMonthly ? 'opacity-50' : ''
            }`}
          >
            Monthly
          </label>
          <label className='switch'>
            <input type='checkbox' onClick={handleSwitchSlider}></input>
            <span className='slider round'></span>
          </label>
          <label
            className={`switch-text text-clr-dark bold ${
              isMonthly ? '' : 'opacity-50'
            }`}
          >
            Yearly
          </label>
        </div>
        <div className='pricing-card-list'>
          {pricingPageData.map((item, index) => {
            const { name, monthly, yearly, description } = item;
            const isActive = plan === name;
            return (
              <li
                key={index}
                className={`price-card ${
                  isActive ? 'bg-dark active' : 'bg-card'
                }`}
              >
                {isActive && <div className='card-pattern'></div>}

                <div className='card-header d-flex flex-col align-center gap-16 '>
                  <h2
                    className={`heading-two bold capitalize text-clr-${
                      isActive ? 'light' : 'dark'
                    }`}
                  >
                    {name}
                  </h2>
                  <p
                    className={`body-text opacity-60 text-clr-${
                      isActive ? 'light' : 'dark'
                    } `}
                  >
                    {description}
                  </p>
                </div>
                <div className='card-main d-flex flex-col'>
                  <p
                    className={`heading-one bold text-clr-${
                      isActive ? 'light' : 'dark'
                    }`}
                  >
                    ${isMonthly ? yearly : monthly}
                  </p>
                  <p
                    className={`body-text opacity-60 text-clr-${
                      isActive ? 'light' : 'dark'
                    }`}
                  >
                    {isMonthly ? 'per year' : 'per month'}
                  </p>
                </div>
                <button
                  className={`pricing-btn full-width fs-12 bold ls-2  uppercase ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => handlePlan(name)}
                >
                  pick plan
                </button>
              </li>
            );
          })}
        </div>
      </section>
      <section className='compare-section'>
        <h1 className='heading-one bold text-clr-dark uppercase'>compare</h1>
        <CompareTable />
        <MobCompareTable />
      </section>
      <Beta />
    </main>
  );
};

export default Pricing;
