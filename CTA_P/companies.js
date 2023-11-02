document.addEventListener("DOMContentLoaded", function () {
    const companyList = document.getElementById("company-list");
    const newCompanyForm = document.getElementById("new-company-form");
    const addCompanyButton = document.getElementById("add-company");

    // Function to create a company list item
    function createCompanyListItem(companyName) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="company1.html">${companyName}</a>`;
        return listItem;
    }

    // Function to handle the addition of a new company
    function addNewCompany() {
        const companyNameInput = document.getElementById("company-name");
        const companyName = companyNameInput.value;

        if (companyName) {
            const companyListItem = createCompanyListItem(companyName);
            companyList.appendChild(companyListItem);

            // Reset the input field
            companyNameInput.value = "";
        }
    }

    // Event listener for adding a new company
    addCompanyButton.addEventListener("click", addNewCompany);

});
companies.js

