// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
      country: "United States",
      capital: "Washington",
      largestCity: "New York",
      subdivisionName: "state",
      subdivisions: [
        {
          name: "Louisiana",
          capital: "Baton Rouge",
          largestCity: "New Orleans",
          area: 134264,
        },
        {
          name: "California",
          capital: "Sacramento",
          largestCity: "Los Angeles",
          area: 423970,
        },
        {
          name: "Nevada",
          capital: "Carson City",
          largestCity: "Las Vegas",
          area: 286382,
        },
      ],
    },
    {
      country: "Guatemala",
      capital: "Guatemala City",
      largestCity: "Guatemala City",
      subdivisionName: "department",
      subdivisions: [
        {
          name: "Huehuetenango",
          capital: "Huehuetenango",
          largestCity: "Huehuetenango",
          area: 7403,
        },
        {
          name: "Izabal",
          capital: "Puerto Barrios",
          largestCity: "Puerto Barrios",
          area: 9038,
        },
        {
          name: "El Progreso",
          capital: "Guastatoya",
          largestCity: "Guastatoya",
          area: 1922,
        },
      ],
    },
  ];
  
  // Your code goes below
  // add some data
  GEOGRAPHY_LIST.push({
    country: "China",
    capital: "Beijing",
    largestCity: "Beijing",
    subdivisionName: "province",
    subdivisions: [
      {
        name: "Guangxi",
        capital: "Nanning",
        largestCity: "Nanning",
        area: 1234,
      },
      {
        name: "Heilongjiang",
        capital: "Haerbin",
        largestCity: "Haerbin",
        area: 2345,
      },
      {
        name: "Fujian",
        capital: "Fuzhou",
        largestCity: "Xiamen",
        area: 4567,
      },
    ],
  });
  
  GEOGRAPHY_LIST.push({
    country: "Guatemala",
    capital: "Guatemala City",
    largestCity: "Guatemala City",
    subdivisionName: "department",
    subdivisions: [
      {
        name: "Huehuetenango",
        capital: "Huehuetenango",
        largestCity: "Huehuetenango",
        area: 7403,
      },
      {
        name: "Izabal",
        capital: "Puerto Barrios",
        largestCity: "Puerto Barrios",
        area: 9038,
      },
      {
        name: "El Progreso",
        capital: "Guastatoya",
        largestCity: "Guastatoya",
        area: 1922,
      },
      
    ],
  });

  const geographyTag = document.getElementById("geography");
  console.log(geographyTag);
  
  function createSubdivisionItem(elements) {
    let result = ``;
  
    for (let j = 0; j < elements.subdivisions.length; j++) {
      const subdivision = elements.subdivisions[j];
      const subdivisionHtml = `<ul>
          <li>name:${subdivision.name}</li>
          <li>capital:${subdivision.capital}</li>
          <li>largestCity:${subdivision.largestCity}</li>
          <li>area:${subdivision.area}</li>
         </ul>`;
      result = result + subdivisionHtml;
    }
  
    return result;
  }
  
  for (let i = 0; i < GEOGRAPHY_LIST.length; i++) {
    const elements = GEOGRAPHY_LIST[i];
  
    const geographyHTML = `<ul>
      <li>country:${elements.country}</li>
      <li>capital:${elements.capital}</li>
      <li>largestCity:${elements.largestCity}</li>
      <li>subdivisionName:${elements.subdivisionName}</li>
      <li>subdivisions:${createSubdivisionItem(elements)}</li>
     </ul>`;
    geographyTag.insertAdjacentHTML("beforeend", geographyHTML);
  }
  
  