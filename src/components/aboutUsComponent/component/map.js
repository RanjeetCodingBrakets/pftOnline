// // MapChart.js
// import React, { useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup
// } from "react-simple-maps";

// import topojson from "../../../data/world-110m.json"; // Ensure this path is correct
// import "../aboutUs.css";

// const MapComponent = () => {
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handleCountryClick = (geo) => {
//     setSelectedCountry(geo.properties);
//   };

//   return (
//     <div className="container-fluid">
//      <div className="row map-box">
//         <div className="col-md-12 col-lg-6 map-con">
//         <h4 className="map-head">Lorem Ipsum Dummy text</h4>
//         {selectedCountry && (
//         <div>
//         <p></p>
//           <h2>Country Details</h2>
//           <p>Name: {selectedCountry.ADMIN}</p>
//           <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
// Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
// Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
// Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.{selectedCountry.POP_EST}</p>
//         </div>
//       )}
//         </div>
//         <div className="col-md-12 col-lg-6 map">
//         <ComposableMap>
//         <ZoomableGroup>
//           <Geographies geography={topojson}>
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   onClick={() => handleCountryClick(geo)}
//                   style={{
//                     default: { fill: "#D6D6DA", outline: "black" },
//                     hover: { fill: "#F53", outline: "black" },
//                     pressed: { fill: "#E42", outline: "black" },
//                   }}
//                 />
//               ))
//             }
//           </Geographies>
//         </ZoomableGroup>
//       </ComposableMap>
//         </div>
//       </div>
      
      
//     </div>
//   );
// };

// export default MapComponent;

