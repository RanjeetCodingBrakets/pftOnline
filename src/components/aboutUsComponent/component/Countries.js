
export const missingCountries = [
  { name: "Singapore", latLng: [1.3521, 103.8198] },
  { name: "Bouvet Island", latLng: [54.4208, 3.3464] },
  { name: "Bermuda", latLng: [32.3078, 64.7505] },
  { name: "Andorra", latLng: [42.5063, 1.5218] },
  { name: "American Samoa", latLng: [14.271, 170.1322] },
  { name: "Åland Islands", latLng: [60.1785, 19.9156] },
];

export const countries = {
  IN: 88,
  CN: 33,
  RU: 79,
  MY: 2,
  GB: 100,
  FK: 10,
  AR: 50,
  VE: 90,
};

export const colorScale = ["#E2AEFF", "#5E32CA"];

export const countryDetails = {
  IN: {
    details: "India is a country in South Asia. It is the seventh-largest country by land area.",
    cities: [
      { name: "New Delhi", latLng: [28.6139, 77.209] },
      { name: "Mumbai", latLng: [19.076, 72.8777] },
      { name: "Bangalore", latLng: [12.9716, 77.5946] },
    ],
  },
  CN: {
    details: "China, officially the People's Republic of China, is a country in East Asia.",
    cities: [
      { name: "Beijing", latLng: [39.9042, 116.4074] },
      { name: "Shanghai", latLng: [31.2304, 121.4737] },
      { name: "Guangzhou", latLng: [23.1291, 113.2644] },
    ],
  },
  RU: {
    details: "Russia, or the Russian Federation, is a transcontinental country spanning Eastern Europe and Northern Asia.",
    cities: [
      { name: "Moscow", latLng: [55.7558, 37.6173] },
      { name: "Saint Petersburg", latLng: [59.9343, 30.3351] },
      { name: "Novosibirsk", latLng: [55.0084, 82.9357] },
    ],
  },
  MY: {
    details: "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.",
    cities: [
      { name: "Kuala Lumpur", latLng: [3.139, 101.6869] },
      { name: "George Town", latLng: [5.4164, 100.3327] },
      { name: "Johor Bahru", latLng: [1.4927, 103.7414] },
    ],
  },
  GB: {
    details: "The United Kingdom is a sovereign country located off the northwestern coast of mainland Europe.",
    cities: [
      { name: "London", latLng: [51.5074, -0.1278] },
      { name: "Manchester", latLng: [53.4808, -2.2426] },
      { name: "Birmingham", latLng: [52.4862, -1.8904] },
    ],
  },
  FK: {
    details: "The Falkland Islands are an archipelago in the South Atlantic Ocean on the Patagonian Shelf.",
    cities: [
      { name: "Stanley", latLng: [-51.6977, -57.8517] },
    ],
  },
  AR: {
    details: "Argentina is a country located mostly in the southern half of South America.",
    cities: [
      { name: "Buenos Aires", latLng: [-34.6037, -58.3816] },
      { name: "Córdoba", latLng: [-31.4201, -64.1888] },
      { name: "Rosario", latLng: [-32.9468, -60.6393] },
    ],
  },
  VE: {
    details: "Venezuela, officially the Bolivarian Republic of Venezuela, is a country on the northern coast of South America.",
    cities: [
      { name: "Caracas", latLng: [10.4806, -66.9036] },
      { name: "Maracaibo", latLng: [10.6545, -71.6345] },
      { name: "Valencia", latLng: [10.162, -68.0077] },
    ],
  },
};
