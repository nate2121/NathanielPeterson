document.addEventListener("DOMContentLoaded", function() {
    const volunteerButton = document.getElementById("volunteerButton");
    const additionalDetails = document.getElementById("additionalDetails");

    // Event listener for Volunteer Now button
    volunteerButton.addEventListener("click", function() {
        
        displayContactForm();
    });

    
    function displayContactForm() {
        // Create form elements dynamically
        const form = document.createElement("form");
        form.innerHTML = `
        <h3>Personal Information</h3>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required>
        <br>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone">
        <br>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required>
        <br>
        <label for="gender">Gender:</label>
        <select id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
            <br>
        <h3>Address Information</h3>
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required>
        <br>
        <label for="city">City:</label>
        <input type="text" id="city" name="city" required>
        <br>
        <label for="state">State:</label>
        <input type="text" id="state" name="state" required>
        <br>
        <label for="zip">Zip Code:</label>
        <input type="text" id="zip" name="zip" required>
        <br>
        <label for="country">Country:</label>
        <input type="text" id="country" name="country" required>
    
        <h3>Volunteering Preferences</h3>
        <label for="availability">Availability:</label>
        <input type="text" id="availability" name="availability" placeholder="e.g., Weekdays after 5pm, Weekends, etc." required>
        <br>
        <label for="interests">Interests:</label>
        <textarea id="interests" name="interests" rows="4" required></textarea>
    
        <h3>Additional Information</h3>
        <label for="skills">Skills or Experience:</label>
        <textarea id="skills" name="skills" rows="4"></textarea>
        <br>
        <label for="reference">Reference (if any):</label>
        <input type="text" id="reference" name="reference">
        <br>
    <button type="submit">Submit</button>
        `;
        
       
        document.body.appendChild(form);
        const footer = document.querySelector("footer");
        footer.parentNode.insertBefore (form, footer)

        // Prevent default form submission behavior
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = form.elements["name"].value;
            const email = form.elements["email"].value;
            console.log("Submitted:", { name, email });
            // reset the form
            form.reset();
            // Hide the form
            form.style.display = "none";
        });
    }


    additionalDetails.addEventListener("mouseenter", function() {
       
        additionalDetails.style.color = "blue";
    });

    additionalDetails.addEventListener("mouseleave", function() {
        // Revert text color when mouse leaves
        additionalDetails.style.color = "black";
    });
});
