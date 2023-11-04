import { compareTableData } from '../assets/data';
import checkIcon from '../assets/pricing/desktop/check.svg';
const CompareTable = () => {
  return (
    <div className='grid-compare'>
      {compareTableData.map((item, index) => {
        const { feature, basic, pro, business } = item;
        return (
          <>
            <div
              className={` ${
                index === 0 ? 'grid-header' : 'grid-item'
              }  fs-12 bold text-clr-dark ls-2  uppercase`}
            >
              {feature}
            </div>
            <div
              className={` ${
                index === 0 ? 'grid-header' : 'grid-item'
              }   fs-12 bold text-clr-dark ls-2  uppercase`}
            >
              {index == 0 ? basic : basic && <img src={checkIcon} alt='' />}
            </div>
            <div
              className={` ${
                index === 0 ? 'grid-header' : 'grid-item'
              }   fs-12 bold text-clr-dark ls-2  uppercase`}
            >
              {index == 0 ? pro : pro && <img src={checkIcon} alt='' />}
            </div>
            <div
              className={` ${
                index === 0 ? 'grid-header' : 'grid-item'
              }   fs-12 bold text-clr-dark ls-2  uppercase`}
            >
              {index == 0
                ? business
                : business && <img src={checkIcon} alt='' />}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CompareTable;
