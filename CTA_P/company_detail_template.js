document.addEventListener("DOMContentLoaded", function () {
    const companyList = document.getElementById("company-list");
    const companyDetailContainer = document.getElementById("company-detail-container");

    // Function to load and display the company detail page
    function loadCompanyDetail(companyName) {
        const url = `company_detail_template.html?company=${encodeURIComponent(companyName)}`;
        companyDetailContainer.innerHTML = `<iframe src="${url}" frameborder="0"></iframe>`;

        // Set the company name in the header
        const companyNamePlaceholder = document.getElementById("company-name-placeholder");
        companyNamePlaceholder.textContent = `${companyName} Details`;
    }

    // Event listener for company links
    companyList.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const companyName = event.target.textContent;
            loadCompanyDetail(companyName);
        }
    });
});
