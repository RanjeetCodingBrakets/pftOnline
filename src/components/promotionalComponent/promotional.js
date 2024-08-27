import OfferOption from './components/offerOption';
import PromotionalFrame from './components/promotionalFrame';
import Offer from './components/offer';
import offerMockData from './components/offerMockData'; // Import the offerMockData
import DealOfTheDay from './components/dealOfTheDay';
import TopSelling from './components/topSelling';
import TopSelling1 from './components/topSelling1';
import LaunchPad from './components/LaunchPad';

const Promotional = () => {
  return (
    <div>
      <PromotionalFrame/>
      <OfferOption/>
      {/* Pass offerMockData as a prop */}
      <Offer offerMockData={offerMockData} />
      <DealOfTheDay offerMockData={offerMockData} />
      <TopSelling offerMockData={offerMockData} />
      <TopSelling1 offerMockData={offerMockData} /> 
      <LaunchPad offerMockData={offerMockData} />
    </div>
  );
}

export default Promotional;


// import React from 'react'
// import PromotionalFrame from './components/promotionalFrame';
// import OfferOption from './components/offerOption';
// import Offer from './components/offer';

// const Promotional = () => {

  
//   return (
//     <div className=''>
//       <PromotionalFrame/>
//       <OfferOption/>
//       <Offer/>
//     </div>
//   )
// }

// export default Promotional;
