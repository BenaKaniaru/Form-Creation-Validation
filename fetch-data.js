document.addEventListener('DOMContentLoaded', function() {
  // Define the async function to fetch user data
  async function fetchUserData() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // API URL
      const dataContainer = document.getElementById('api-data');  // Get the data container element

      try {
          const response = await fetch(apiUrl);  // Fetch data from the API
          const users = await response.json();  // Convert the response to JSON

          dataContainer.innerHTML = '';  // Clear the "Loading user data..." message

          const userList = document.createElement('ul');  // Create a <ul> element

          // Loop through the users array and create <li> elements for each user
          users.forEach(user => {
              const listItem = document.createElement('li');  // Create a <li> element
              listItem.textContent = user.name;  // Set the text content to the user's name
              userList.appendChild(listItem);  // Append the <li> to the <ul>
          });

          dataContainer.appendChild(userList);  // Append the <ul> to the data container
      } catch (error) {
          dataContainer.innerHTML = 'Failed to load user data.';  // Handle any errors during fetch
      }
  }

  // Invoke fetchUserData when the DOM has fully loaded
  fetchUserData();
});
