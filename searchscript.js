const suggestions = [
    "Toyota Camry",
    "Honda Accord",
    "Ford Mustang",
    "Chevrolet Camaro",
    "BMW 3 Series",
    "Audi A4",
    "Tesla Model 3",
    "Nissan Altima",
    "Mazda CX-5",
    "Subaru Outback",
];

const showSuggestions = (input) => {
    console.log('Input:', input);
    const resultsBox = document.getElementById("sresult");
    resultsBox.innerHTML = " ";
    console.log(resultsBox)

    
    const filteredSuggestions = suggestions.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
    );

    if (filteredSuggestions.length > 0) {
        filteredSuggestions.forEach((suggestion) => {
            const resultItem = document.createElement("p");
            resultItem.textContent = suggestion;

            resultItem.addEventListener("click", () => {
                document.getElementById("search").value = suggestion;
                resultsBox.style.display = "none";
            });

            resultsBox.appendChild(resultItem);
        });

        resultsBox.style.display = "block";
    } else {
        resultsBox.style.display = "none";
    }
};

document.getElementById("search").addEventListener("input", (event) => {
    showSuggestions(event.target.value);
});
