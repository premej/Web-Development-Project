function searchMedicine() {
    const searchTerm = document.getElementById('searchInput').value;
    searchJSON(searchTerm);
  }
  function searchJSON(searchText) {
    fetch('medinfo.json')
      .then(response => response.json())
      .then(data => {
        // Search for the entered text in the JSON data
        const result = data.find(item => item.name.toLowerCase() === searchText.toLowerCase());
        // Get the result container element
        const resultContainer = document.getElementById('resultContainer');
        // Clear previous results
        resultContainer.innerHTML = '';
        // Display the information if found
        if (result) {
          const name = document.createElement('p');
          name.textContent = 'Name: ' + result.name;
          resultContainer.appendChild(name);
  
          const purpose = document.createElement('p');
          purpose.textContent = 'Properties: ' + result.purpose;
          resultContainer.appendChild(purpose);
  
          const description = document.createElement('p');
          description.textContent = 'Description: ' + result.description;
          resultContainer.appendChild(description);
  
          const dosage = document.createElement('p');
          dosage.textContent = 'Dosage: ' + result.dosage;
          resultContainer.appendChild(dosage);
        } else {
          const noResult = document.createElement('p');
          noResult.textContent = 'No matching result found.';
          resultContainer.appendChild(noResult);
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  