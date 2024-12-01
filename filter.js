/* just toggles the filter */
function toggleFilter() {
    const filterOptions = document.getElementById("filter-options");
    if (filterOptions.style.display === "block") {
        filterOptions.style.display = "none";
    } else {
        filterOptions.style.display = "block";
    }
}

