document.addEventListener("DOMContentLoaded", function () {
    // This code will run when the document is fully loaded

    document.getElementById("registrationForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Retrieve values from form inputs and checkboxes
        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        // Retrieve selected food choices as an array
        const foodChoices = Array.from(document.querySelectorAll('input[name="food[]"]:checked')).map(checkbox => checkbox.value).join(", ");

        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;

        // Set the values in the table cells
        document.getElementById("firstNameValue").textContent = firstName;
        document.getElementById("lastNameValue").textContent = lastName;
        document.getElementById("addressValue").textContent = address;
        document.getElementById("pincodeValue").textContent = pincode;
        document.getElementById("genderValue").textContent = gender;
        document.getElementById("foodValue").textContent = foodChoices;
        document.getElementById("stateValue").textContent = state;
        document.getElementById("countryValue").textContent = country;
    });
});