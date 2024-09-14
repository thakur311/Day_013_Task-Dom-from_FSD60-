document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    
    const foodOptions = document.querySelectorAll('input[name="food"]:checked');
    let selectedFoods = [];
    foodOptions.forEach(option => {
        selectedFoods.push(option.value);
    });
    if (selectedFoods.length < 2) {
        alert('Please select at least two food options.');
        return;
    }

    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const tableBody = document.querySelector(' tbody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${selectedFoods.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;
    tableBody.appendChild(newRow);
    document.getElementById('form').reset();
});