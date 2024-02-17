document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var type = document.getElementById('type').value;
    var purpose = document.getElementById('purpose').value;

    // Get the file input element
    var fileInput = document.getElementById('profilePicture');
    var profilePicture = null;

    // Check if a file is selected
    if (fileInput.files.length > 0) {
        // Get the first file (assuming only one file can be uploaded)
        profilePicture = fileInput.files[0];
    }

    // Do something with the form values and profile picture (e.g., send them to a server)
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Type of Traveler:", type);
    console.log("Purpose:", purpose);
    console.log("Profile Picture:", profilePicture);

    // You can make an AJAX request here to send the form data and profile picture to a server
    // Example using Fetch API:
    /*
    var formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('type', type);
    formData.append('purpose', purpose);
    formData.append('profilePicture', profilePicture);

    fetch('https://example.com/api/create-profile', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success response
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
    */
});
