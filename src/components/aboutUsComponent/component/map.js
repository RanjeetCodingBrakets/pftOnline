import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React, { useState } from "react";
import { colorScale, countries, missingCountries, countryDetails } from "./Countries";

function MapComponent() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [cityMarkers, setCityMarkers] = useState([]);

  const handleRegionClick = (event, code) => {
    setSelectedCountry(code);
    setCityMarkers(countryDetails[code]?.cities || []);
  };

  return (
    <div className="container-fluid">
      <div className="row map-box">
        <div className="col-md-12 col-lg-6 map-con">
          <h4 className="map-head">Country Details</h4>
          <p>
            {selectedCountry 
              ? countryDetails[selectedCountry].details 
              : "Select a country on the map to see details."
            }
          </p>
          {selectedCountry && cityMarkers.length > 0 && (
            <div>
              <h5>Cities:</h5>
              <ul>
                {cityMarkers.map((city, index) => (
                  <li key={index}>{city.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-md-12 col-lg-6 map">
          <div style={{ margin: "auto", width: "700px", height: "450px" }}>
            <VectorMap
              map={worldMill}
              containerStyle={{
                width: "700px",
                height: "600px",
              }}
              backgroundColor="#282c34"
              // markers={[...missingCountries, ...cityMarkers]}
              // markerStyle={{
              //   initial: {
              //     fill: "red",
              //   },
              // }}
              series={{
                regions: [
                  {
                    scale: colorScale,
                    values: countries,
                    min: 0,
                    max: 100,
                  },
                ],
              }}
              onRegionClick={handleRegionClick}
              onRegionTipShow={function reginalTip(event, label, code) {
                return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code]}
                    </p>
                    </div>`);
              }}
              onMarkerTipShow={function markerTip(event, label, code) {
                return label.html(`
                  <div style="background-color: white; border-radius: 3px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
