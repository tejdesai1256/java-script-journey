// Fetch API
fetch(file)
  .then(function(response) {
     return response.text();
  })
  .then(function(data) {
    myDisplayer(data);
  });

  // Fetch a file
fetch(file)
  .then(response => response.text())
  .then(data => myDisplayer(data));