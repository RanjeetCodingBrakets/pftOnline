
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
};

const WeTrade = () => {
  return (
    <div>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item"><h4>1</h4></div>
        <div className="item"><h4>2</h4></div>
        <div className="item"><h4>3</h4></div>
        <div className="item"><h4>4</h4></div>
        <div className="item"><h4>5</h4></div>
        <div className="item"><h4>6</h4></div>
        <div className="item"><h4>7</h4></div>
        <div className="item"><h4>8</h4></div>
        <div className="item"><h4>9</h4></div>
        <div className="item"><h4>10</h4></div>
      </OwlCarousel>
    </div>
  );
};

export default WeTrade;









// import React, { useState } from 'react';
// import { Carousel} from 'react-bootstrap';
// import images from "../../constants/images";
// import './weTrade.css';

// const WeTrade = () => {
//   const [tradeImages] = useState([
//     { id: 1, src: images.aashirvaad, alt: 'Image 1' },
//     { id: 2, src: images.aashirvaad, alt: 'Image 2' },
//     { id: 3, src: images.aashirvaad, alt: 'Image 3' },
//     { id: 4, src: images.aashirvaad, alt: 'Image 4' },
//     { id: 5, src: images.aashirvaad, alt: 'Image 5' },
//     { id: 6, src: images.aashirvaad, alt: 'Image 6' },
//     { id: 7, src: images.aashirvaad, alt: 'Image 7' },
//     { id: 8, src: images.aashirvaad, alt: 'Image 8' },
//     { id: 9, src: images.aashirvaad, alt: 'Image 9' },
//     { id: 10, src: images.aashirvaad, alt: 'Image 10' },
//   ]);

//   const showImages = [];
//   for (let i = 0; i < tradeImages.length; i += 5) {
//     showImages.push(tradeImages.slice(i, i + 5));
//   }

//   return (
//     <div className='container  carousel-container rounded-4  we-trade'>
//       <div className='row'>
//         <div  className="Col">
//           <h3>We Trade</h3>
//         </div>
//       </div>
//       <Carousel interval={null}>
//         {showImages.map((group, index) => (
//           <Carousel.Item key={index}>
//             <div className="row justify-content-center ">
//               {group.map((image) => (
//                 <div className='col'>
//                 <div key={image.id} xs={6} md={3} lg={2}  className=" text-center justify-content-center ">
//                   <img className='mb-5 rounded-3' src={image.src} alt={image.alt} />
//                 </div>
//                 </div>
//               ))}
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default WeTrade;


