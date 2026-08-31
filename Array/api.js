// Fetch a file
fetch(file)
  .then(function(response) {
     return response.text();
  })
  .then(function(data) {
    myDisplayer(data);
  });