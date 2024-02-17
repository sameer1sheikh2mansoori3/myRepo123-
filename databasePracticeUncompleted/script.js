const form = document.getElementById('user-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  // Basic validation
  if (!name || !email) {
    alert('Please fill in all fields.');
    return;
  }

  // Send data to backend as JSON
  const response = await fetch('http://127.0.0.1:5000/insert-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email })
  });
console.log(response);
  if (!response.ok) {
    alert('Error adding user: ' + response.statusText);
  } else {
    alert('User added successfully!');
    // Clear the form
    document.getElementById('user-form').reset();
  }
});
