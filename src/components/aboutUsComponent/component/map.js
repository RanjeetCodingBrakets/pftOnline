import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React, { useState } from "react";
import { colorScale, countries, missingCountries } from "./Countries";

function MapComponent() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryDetails = {
    IN: "India is a country in South Asia. It is the seventh-largest country by land area.",
    CN: "China, officially the People's Republic of China, is a country in East Asia.",
    RU: "Russia, or the Russian Federation, is a transcontinental country spanning Eastern Europe and Northern Asia.",
    MY: "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.",
    GB: "The United Kingdom is a sovereign country located off the northwestern coast of mainland Europe.",
    FK: "The Falkland Islands are an archipelago in the South Atlantic Ocean on the Patagonian Shelf.",
    AR: "Argentina is a country located mostly in the southern half of South America.",
    VE: "Venezuela, officially the Bolivarian Republic of Venezuela, is a country on the northern coast of South America.",
  };

  const handleRegionClick = (event, code) => {
    setSelectedCountry(code);
  };

  return (
    <div className="container-fluid">
      <div className="row map-box">
        <div className="col-md-12 col-lg-6 map-con">
          <h4 className="map-head">Country Details</h4>
          <p>
            {selectedCountry ? countryDetails[selectedCountry] : "Select a country on the map to see details."}
          </p>
        </div>
        <div className="col-md-12 col-lg-6 map">
          <div style={{ margin: "auto", width: "700px", height: "600px" }}>
            <VectorMap
              map={worldMill}
              containerStyle={{
                width: "700px",
                height: "600px",
              }}
              backgroundColor="#282c34"
              markers={missingCountries}
              markerStyle={{
                initial: {
                  fill: "red",
                },
              }}
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
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
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
