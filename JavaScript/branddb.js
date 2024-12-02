const branddb = [
    {
      "name": "Toyota",
      "nationality": "Japan",
      "year_founded": 1937,
      "logo_url": "brand logos/toyota.svg",
      "nationality_url": "Country logos/Flag_of_Japan.svg",
      "page_url": "Toyota.html"
    },
    {
      "name": "Ford",
      "nationality": "USA",
      "year_founded": 1903,
      "logo_url": "brand logos/ford.svg",
      "nationality_url": "Country logos/Flag_of_the_United_States.svg",
      "page_url": "Ford.html"
    },
    {
      "name": "BMW",
      "nationality": "Germany",
      "year_founded": 1916,
      "logo_url": "brand logos/bmw.svg",
      "nationality_url": "Country logos/Flag_of_Germany.svg",
      "page_url": "BMW.html"
    },
    {
      "name": "Ferrari",
      "nationality": "Italy",
      "year_founded": 1939,
      "logo_url": "brand logos/ferrari.svg",
      "nationality_url": "Country logos/Flag_of_Italy.svg",
      "page_url": "Ferrari.html"
    },
    {
      "name": "Porsche",
      "nationality": "Germany",
      "year_founded": 1931,
      "logo_url": "brand logos/porsche.svg",
      "nationality_url": "Country logos/Flag_of_Germany.svg",
      "page_url": "Porsche.html"
    },
    {
      "name": "Honda",
      "nationality": "Japan",
      "year_founded": 1948,
      "logo_url": "brand logos/honda.svg",
      "nationality_url": "Country logos/Flag_of_Japan.svg",
      "page_url": "Honda.html"
    },
    {
      "name": "Hyundai",
      "nationality": "South Korea",
      "year_founded": 1967,
      "logo_url": "brand logos/hyundai.svg",
      "nationality_url": "Country logos/Flag_of_South_Korea.svg",
      "page_url": "Hyundai.html"
    }
  ];
  

/* for displaying boxes and inputing the stuff required such as name and others */ 
const rowcontainers = document.getElementById("brandrow");

function displaybrand(filteredbrands) {
  rowcontainers.innerHTML = " ";

  filteredbrands.forEach(branddb => {
    const square = document.createElement("div");
    square.classList.add("square")

    const logo = document.createElement("div");
    logo.classList.add("logo");
    const flag = document.createElement("div");
    logo.classList.add("flag");
    flag.style.backgroundImage = `url(${branddb.logo_url})`;

    const link = document.createElement("a");
    link.href = branddb.page_url;
    link.classList.add("page_url");
    link.style.display = "block";


    square.innerHTML = `
    <div class="name">${branddb.name}</div>
    <div class="logo"><img src="${branddb.logo_url}" alt="${branddb.name} logo"></div>
    <div class="year"> Year founded: ${branddb.year_founded}</div>
    <div class="country">Country of origin: ${branddb.nationality}</div>
    <div class="flag"><img src="${branddb.nationality_url}" alt="${branddb.nationality}"></div>`;

    link.append(square)
    rowcontainers.append(link);
  });
}

displaybrand(branddb);

/* sorting asecnding and descending for brands */
function sortBrands(brands, key, order) {
  return brands.sort((a, b) => {
      let comparisonResult;

      if (typeof a[key] === 'string' && typeof b[key] === 'string') {
          comparisonResult = a[key].localeCompare(b[key]);
      } else {
          comparisonResult = a[key] - b[key];
      }

      if (order === "asc") {
          return comparisonResult;
      } else if (order === "desc") {
          return -comparisonResult;
      }

      return 0; 
  });
}

const applyFilterButton = document.querySelector(".apply-filter-btn");

applyFilterButton.addEventListener("click", function () {
    const brandOrder = document.getElementById("bsort").value;
    const countryOrder = document.getElementById("csort").value;

    let filteredBrands = branddb;

    if (brandOrder) {
        filteredBrands = sortBrands(filteredBrands, "name", brandOrder);
    }

    if (countryOrder) {
        filteredBrands = sortBrands(filteredBrands, "nationality", countryOrder);
    }

    displaybrand(filteredBrands);
});


/* search filter for brands */
const search = document.getElementById("search");

search.addEventListener("input", function(event) {
    const word = event.target.value.toLowerCase();

    const filteredbrands = branddb.filter(branddb => 
      branddb.name.toLowerCase().includes(word)
    );

    displaybrand(filteredbrands);
});
