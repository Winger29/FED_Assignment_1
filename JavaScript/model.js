const ModelDb = [
    {
      "name": "911 Carrera",
      "fuel_type": "Gasoline",
      "category": "Sports Car",
      "year": 2023,
      "image_url": "car_images/2023-porsche-911-carrera-t-692-652e8b769d650.avif",
      "page_url": "911-Carrera.html"
    },
    {
      "name": "Taycan",
      "fuel_type": "Electric",
      "category": "Sports Car",
      "year": 2023,
      "image_url": "car_images/2020-Porsche-Taycan-front-three-quarter-in-motion.avif",
      "page_url": "Porsche-Taycan.html"
    },
    {
      "name": "Cayenne",
      "fuel_type": "Hybrid",
      "category": "SUV",
      "year": 2023,
      "image_url": "car_images/2021_porsche_cayenne_4dr-suv_s_fq_oem_1_1600.jpg",
      "page_url": "Porsche-Cayenne.html"
    },
    {
      "name": "Panamera",
      "fuel_type": "Gasoline",
      "category": "Sedan",
      "year": 2023,
      "image_url": "car_images/2023-porsche-panamera-turbo-s-102-1671562605.avif",
      "page_url": "Porsche-Panamera.html"
    },
    {
      "name": "Macan",
      "fuel_type": "Gasoline",
      "category": "SUV",
      "year": 2023,
      "image_url": "car_images/2023-porsche-macan-t-101-1645043997.avif",
      "page_url": "Porsche-Macan.html"
    },
    {
      "name": "Porsche 919 Evo",
      "fuel_type": "Hybrid",
      "category": "Race Car",
      "year": 2019,
      "image_url": "car_images/porsche-919-hybrid-lead-1544468527.jpg",
      "page_url": "Porsche-919Evo.html"
    },
    {
      "name": "Porsche Mission R",
      "fuel_type": "Electric",
      "category": "Concept Car",
      "year": 2021,
      "image_url": "car_images/Porsche-mission-r.jpg",
      "page_url": "Porsche-MissionR.html"
    }
  ];



/* creates the rectangles and puts the info inside the rectangles */
  const vehicleContainer = document.getElementById("carcontainer");
  vehicleContainer.innerHTML = "";

function createVehicleCards() {
ModelDb.forEach(car => {
    const card = document.createElement("div");
    card.classList.add("vehicle-card");


    const carImage = document.createElement("img");
    carImage.src = car.image_url;
    carImage.alt = car.name;
    carImage.classList.add("vehicle-image");

    const carDetails = document.createElement("div");
    carDetails.classList.add("vehicle-details");

    const link = document.createElement("a");
    link.href = car.page_url;
    link.classList.add("vehicleurl");
    link.style.display = "block";  

    const carName = document.createElement("h3");
    carName.textContent = car.name;

    const carType = document.createElement("p");
    carType.textContent = `Fuel Type: ${car.fuel_type}`;

    const carCategory = document.createElement("p");
    carCategory.textContent = `Category: ${car.category}`;

    const carYear = document.createElement("p");
    carYear.textContent = `Year: ${car.year}`;

    carDetails.appendChild(carName);
    carDetails.appendChild(carType);
    carDetails.appendChild(carCategory);
    carDetails.appendChild(carYear);

    card.appendChild(carImage);
    card.appendChild(carDetails);
    
    link.appendChild(card);

    vehicleContainer.appendChild(link);
});
}

createVehicleCards(ModelDb)


// Function to filter and display the vehicle cards
function filterAndDisplayModels() {
    const word = document.getElementById("search").value.toLowerCase();
    const vehicleContainer = document.getElementById("carcontainer");
    vehicleContainer.innerHTML = "";
  
    ModelDb.filter(car => car.name.toLowerCase().includes(word)).forEach(car => {
      const card = document.createElement("div");
      card.classList.add("vehicle-card");
  
      const carImage = document.createElement("img");
      carImage.src = car.image_url;
      carImage.alt = car.name;
      carImage.classList.add("vehicle-image");
  
      const carDetails = document.createElement("div");
      carDetails.classList.add("vehicle-details");
  
      const link = document.createElement("a");
      link.href = car.page_url;
      link.classList.add("vehicleurl");
      link.style.display = "block";  
  
      const carName = document.createElement("h3");
      carName.textContent = car.name;
  
      const carType = document.createElement("p");
      carType.textContent = `Fuel Type: ${car.fuel_type}`;
  
      const carCategory = document.createElement("p");
      carCategory.textContent = `Category: ${car.category}`;
  
      const carYear = document.createElement("p");
      carYear.textContent = `Year: ${car.year}`;
  
      carDetails.appendChild(carName);
      carDetails.appendChild(carType);
      carDetails.appendChild(carCategory);
      carDetails.appendChild(carYear);
  
      card.appendChild(carImage);
      card.appendChild(carDetails);
      link.appendChild(card);
      vehicleContainer.appendChild(link);
    });
  }
  
  document.getElementById("search").addEventListener("input", filterAndDisplayModels);
  
  filterAndDisplayModels();
  

/* checkbox filter for fuel type */
function filterByFuelType() {
    const vehicleContainer = document.getElementById("carcontainer");

    vehicleContainer.innerHTML = "";

    const fuelFilters = document.querySelectorAll(".fuel-filter");
    const selectedFuelTypes = Array.from(fuelFilters)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    const filteredModels = ModelDb.filter(car => {
        return selectedFuelTypes.length === 0 || selectedFuelTypes.includes(car.fuel_type.toLowerCase());
    });

    filteredModels.forEach(car => {
        const card = document.createElement("div");
        card.classList.add("vehicle-card");

        const carImage = document.createElement("img");
        carImage.src = car.image_url;
        carImage.alt = car.name;
        carImage.classList.add("vehicle-image");

        const carDetails = document.createElement("div");
        carDetails.classList.add("vehicle-details");

        const link = document.createElement("a");
        link.href = car.page_url;
        link.classList.add("vehicleurl");
        link.style.display = "block";

        const carName = document.createElement("h3");
        carName.textContent = car.name;

        const carType = document.createElement("p");
        carType.textContent = `Fuel Type: ${car.fuel_type}`;

        const carCategory = document.createElement("p");
        carCategory.textContent = `Category: ${car.category}`;

        const carYear = document.createElement("p");
        carYear.textContent = `Year: ${car.year}`;

        carDetails.appendChild(carName);
        carDetails.appendChild(carType);
        carDetails.appendChild(carCategory);
        carDetails.appendChild(carYear);

        card.appendChild(carImage);
        card.appendChild(carDetails);
        link.appendChild(card);
        vehicleContainer.appendChild(link);
    });
}
