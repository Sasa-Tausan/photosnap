import { compareTableData } from '../assets/data';
import checkIcon from '../assets/pricing/desktop/check.svg';

const MobCompareTable = () => {
  return (
    <div className='mobile-grid-compare full-width'>
      {compareTableData.map((item, index) => {
        const { feature, basic, pro, business } = item;
        const isFirstElement = index === 0;
        return (
          <>
            <div
              key={index}
              className={` ${
                isFirstElement ? 'mobile-grid-header' : 'mobile-grid-item'
              }   d-flex flex-col gap-16 fs-12 bold text-clr-dark ls-2  uppercase`}
            >
              <p className='fs-12 bold text-clr-dark ls-2  uppercase'>
                {feature}
              </p>
              <div className='d-flex align-center align-start gap-70'>
                <div className='d-flex flex-col align-center gap-16 '>
                  <p className='fs-12 bold text-clr-dark ls-2  uppercase'>
                    {isFirstElement ? '' : 'basic'}
                  </p>
                  {isFirstElement
                    ? ''
                    : basic && <img src={checkIcon} alt='' />}
                </div>
                <div className='d-flex flex-col align-center  gap-16 '>
                  <p className='fs-12 bold text-clr-dark ls-2  uppercase'>
                    {isFirstElement ? '' : 'pro'}
                  </p>
                  {isFirstElement ? '' : pro && <img src={checkIcon} alt='' />}
                </div>
                <div className='d-flex flex-col align-center  gap-16 '>
                  <p className='fs-12 bold text-clr-dark ls-2  uppercase'>
                    {isFirstElement ? '' : 'business'}
                  </p>
                  {isFirstElement
                    ? ''
                    : business && <img src={checkIcon} alt='' />}
                </div>
              </div>
            </div>
          </>
        );
      })}
      {/* <div className='mobile-grid-header fs-12 bold text-clr-dark ls-2  uppercase'>
        the features
      </div>
      <div className='mobile-grid-item d-flex flex-col gap-16 fs-12 bold text-clr-dark ls-2  uppercase'>
        <p className='fs-12 bold text-clr-dark ls-2  uppercase'>
          unlimited story posting
        </p>
        <div className='d-flex align-center gap-70'>
          <div className='d-flex flex-col align-center gap-16 '>
            <p className='fs-12 bold text-clr-dark ls-2  uppercase'>basic</p>
            <img src={checkIcon} alt='' />
          </div>
          <div className='d-flex flex-col align-center gap-16 '>
            <p className='fs-12 bold text-clr-dark ls-2  uppercase'>pro</p>
            <img src={checkIcon} alt='' />
          </div>
          <div className='d-flex flex-col align-center gap-16 '>
            <p className='fs-12 bold text-clr-dark ls-2  uppercase'>business</p>
            <img src={checkIcon} alt='' />
          </div>
        </div>
      </div>
      <div className='mobile-grid-item d-flex flex-col gap-16 fs-12 bold text-clr-dark ls-2  uppercase'>
        <p className='fs-12 bold text-clr-dark ls-2  uppercase'>
          unlimited story posting
        </p>
        <div className='d-flex align-center gap-70'>
          <div className='d-flex flex-col align-center gap-16 '>
            <p className='fs-12 bold text-clr-dark ls-2  uppercase'>basic</p>
            <img src={checkIcon} alt='' />
          </div>
          <div className='d-flex flex-col align-center gap-16 '>
            <p className='fs-12 bold text-clr-dark ls-2  uppercase'>pro</p>
            <img src={checkIcon} alt='' />
          </div>
          <div className='d-flex flex-col align-center gap-16 '>
            <p className='fs-12 bold text-clr-dark ls-2  uppercase'>business</p>
            <img src={checkIcon} alt='' />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MobCompareTable;
