fetch('/users/all')
    .then(response => response.json())
    .then(data => {
        const usersTable = document.getElementById('users-table');
        data.users.forEach(user => {
            const row = document.createElement('tr');
            const firstNameCell = document.createElement('td');
            firstNameCell.innerText = user.firstName;
            const lastNameCell = document.createElement('td');
            lastNameCell.innerText = user.lastName;
            const emailCell = document.createElement('td');
            emailCell.innerText = user.email;
            const ageCell = document.createElement('td');
            ageCell.innerText = user.age;

            row.appendChild(firstNameCell);
            row.appendChild(lastNameCell);
            row.appendChild(emailCell);
            row.appendChild(ageCell);

            usersTable.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching users:', error));

function AddNewUser() {
    window.location.href = "/index.html";
}