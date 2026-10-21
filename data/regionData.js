export const continentalDivisions = [
  {
    id: 1,
    name: "East Asia",
    code: "DIV-EA • PACIFIC RIM",
    settlements: "22 settlements",
    terrain: "TERRAIN: VOLCANIC ARCS & RIFT BASINS",
    subregions: "Sub-regions: Japan, South Korea, China • 22 cataloged settlements",
    jurisdiction: "JURISDICTION CODE 01",
    linkText: "Browse East Asia >",
    path: "/regions/asia/japan/hokuriku"
  },
  {
    id: 2,
    name: "Southern Europe",
    code: "DIV-SE • ADRIATIC COAST",
    settlements: "19 settlements",
    terrain: "TERRAIN: LIMESTONE KARST & COASTAL CLIFFS",
    subregions: "Sub-regions: Croatia, Italy, Greece, Montenegro • 19 cataloged settlements",
    jurisdiction: "JURISDICTION CODE 02",
    linkText: "Browse Southern Europe >",
    path: "/regions/europe/croatia/dalmatia"
  },
  {
    id: 3,
    name: "Scandinavia & North Atlantic",
    code: "DIV-SNA • SUBARCTIC SHIELD",
    settlements: "14 settlements",
    terrain: "TERRAIN: GLACIAL PLATEAUS & GEOTHERMAL FIELDS",
    subregions: "Sub-regions: Iceland, Norway, Sweden, Faroe Islands • 14 cataloged settlements",
    jurisdiction: "JURISDICTION CODE 03",
    linkText: "Browse North Atlantic >",
    path: "/regions/europe/iceland/capital"
  },
  {
    id: 4,
    name: "Americas & Caribbean",
    code: "DIV-AMC • CONTINENTAL SHELF",
    settlements: "21 settlements",
    terrain: "TERRAIN: ROCKY HIGHLANDS & TROPICAL LOWLANDS",
    subregions: "Sub-regions: Canada, Colombia, Mexico, Peru • 21 cataloged settlements",
    jurisdiction: "JURISDICTION CODE 04",
    linkText: "Browse Americas >",
    path: "/regions/americas/colombia/caribbean"
  }
];

export const regionData = {
  kansai: {
    name: "Hokuriku & Chugoku Corridor",
    description: "The Sea of Japan coastal belt stretching from Kanazawa's Edo-era castle town through Hiroshima's peace memorial cityscape, encompassing ancient crafts, maritime heritage, and pilgrimage routes.",
    parent: "Japan",
    grandparent: "Asia",
    prefectures: "5 (Ishikawa, Fukui, Toyama, Hiroshima, Okayama)",
    uri: "/regions/asia/japan/hokuriku",
    type: "SUB_REGION_INDEX",
    spatialMetrics: {
      index: "LOC-36.5613°N",
      admin: "Hokuriku-Chugoku (北陸・中国)",
      area: "41,890.20 km²",
      population: "~8.7M",
      gateway: "KMQ (Komatsu Airport) / HIJ (Hiroshima Airport)"
    },
    destinations: [1, 7, 8, 9], // Marrakech, Seoul, Kanazawa, Hiroshima
    transitNote: "The Hokuriku Shinkansen provides the primary high-speed spine linking Tokyo to Kanazawa in 2.5 hours, with extension plans toward Osaka. Westward, the Sanyo Shinkansen connects Hiroshima to Osaka and Fukuoka. Regional JR lines, Hokutetsu buses, and Hiroden streetcars complete the local transit mesh across both corridors.",
    climateNote: "Hokuriku faces heavy Sea of Japan snowfall in winter due to Siberian air masses crossing warm coastal currents, while Hiroshima and the Seto Inland Sea coast enjoy milder, drier winters with warm, humid summers moderated by maritime breezes from the Inland Sea."
  }
};

export default regionData;

