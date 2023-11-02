document.addEventListener("DOMContentLoaded", function () {
    const shareExperienceButton = document.getElementById("share-experience-button");
    const sharedExperiencesList = document.getElementById("shared-experiences");

    function createSharedExperienceItem(numOfRounds, roundStatus, offerStatus, experienceLevel, experienceText) {
        // Create a new list item
        const listItem = document.createElement("li");

        // Create strong elements for labels
        const numOfRoundsLabel = document.createElement("strong");
        numOfRoundsLabel.textContent = "Number of Rounds: ";
        const roundStatusLabel = document.createElement("strong");
        roundStatusLabel.textContent = "Round Status: ";
        const offerStatusLabel = document.createElement("strong");
        offerStatusLabel.textContent = "Offer Status: ";
        const experienceLevelLabel = document.createElement("strong");
        experienceLevelLabel.textContent = "Experience Level: ";

        // Create text nodes for values
        const numOfRoundsText = document.createTextNode(numOfRounds);
        const roundStatusText = document.createTextNode(roundStatus);
        const offerStatusText = document.createTextNode(offerStatus);
        const experienceLevelText = document.createTextNode(experienceLevel);

        // Create a paragraph element for experience text
        const experienceTextParagraph = document.createElement("p");
        experienceTextParagraph.classList.add("shared-experience-text");
        experienceTextParagraph.textContent = experienceText;

        // Create edit and delete buttons
        const editButton = document.createElement("button");
        editButton.classList.add("edit-button");
        editButton.textContent = "Edit";
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";

        // Append all elements to the list item
        listItem.appendChild(numOfRoundsLabel);
        listItem.appendChild(numOfRoundsText);
        listItem.appendChild(document.createElement("br"));
        listItem.appendChild(roundStatusLabel);
        listItem.appendChild(roundStatusText);
        listItem.appendChild(document.createElement("br"));
        listItem.appendChild(offerStatusLabel);
        listItem.appendChild(offerStatusText);
        listItem.appendChild(document.createElement("br"));
        listItem.appendChild(experienceLevelLabel);
        listItem.appendChild(experienceLevelText);
        listItem.appendChild(document.createElement("br"));
        listItem.appendChild(experienceTextParagraph);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        // Apply CSS styles to the new list item
        listItem.style.marginBottom = "20px";
        listItem.style.border = "1px solid #ccc";
        listItem.style.padding = "15px";
        listItem.style.backgroundColor = "#f9f9f9";

        return listItem;
    }

    // Event listener for the Share button
    shareExperienceButton.addEventListener("click", function () {
        // Retrieve selected values and entered experience text
        const numOfRoundsSelect = document.getElementById("number-of-rounds");
        const roundStatusSelect = document.getElementById("rounds-status-select");
        const offerStatusRadios = document.querySelectorAll('input[name="offer-status"]');
        const experienceLevelRadio = document.querySelector('input[name="experience-level"]:checked');
        const experienceTextarea = document.getElementById("experience-textarea");

        const numOfRounds = numOfRoundsSelect.value;
        const roundStatus = roundStatusSelect.value;
        const offerStatus = [...offerStatusRadios].find(radio => radio.checked).value;
        const experienceLevel = experienceLevelRadio ? experienceLevelRadio.value : '';
        const experienceText = experienceTextarea.value;

        // Create a new shared experience item
        const sharedExperienceItem = createSharedExperienceItem(numOfRounds, roundStatus, offerStatus, experienceLevel, experienceText);

        // Add the new shared experience item to the end of the list
        sharedExperiencesList.appendChild(sharedExperienceItem);

        // Clear the form inputs
        numOfRoundsSelect.value = "1";
        roundStatusSelect.value = "Round 1";
        offerStatusRadios.forEach(radio => (radio.checked = false));
        if (experienceLevelRadio) {
            experienceLevelRadio.checked = false;
        }
        experienceTextarea.value = "";
    });

    // Event delegation for handling edit and delete clicks
    sharedExperiencesList.addEventListener("click", function (event) {
        const target = event.target;

        // Handle edit button click
        if (target.classList.contains("edit-button")) {
            const sharedExperienceItem = target.closest("li");
            const sharedExperienceText = sharedExperienceItem.querySelector(".shared-experience-text");
            const newText = prompt("Edit the shared experience:", sharedExperienceText.textContent);

            if (newText !== null) {
                sharedExperienceText.textContent = newText;
            }
        }

        // Handle delete button click
        if (target.classList.contains("delete-button")) {
            const sharedExperienceItem = target.closest("li");
            sharedExperiencesList.removeChild(sharedExperienceItem);
        }
    });
});

