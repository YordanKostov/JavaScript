let url = 'http://localhost:3030/jsonstore/collections/students';

let form = document.getElementById('form');
let formData = new FormData(form);
let submitBtn = document.getElementById('submit');

form.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    let formData = new FormData(form);
    let obj = {
        "firstName": formData.get('firstName'),
        "lastName": formData.get('lastName'),
        "facultyNumber": formData.get('facultyNumber'),
        "grade": formData.get('grade'),
    };

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };
    fetch(url, options);

    form.reset();
});

submitBtn.addEventListener('click', async () =>{
    let response = await fetch(url);
    let data = await response.json();
    let tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';

    for (let el in data){
        let mainTr = document.createElement('tr');
        let firstNameTr = document.createElement('td');
        let lastNameTr = document.createElement('td');
        let facultyNumTr = document.createElement('td');
        let gradeTr = document.createElement('td');

        firstNameTr.textContent = data[el].firstName;
        lastNameTr.textContent = data[el].lastName;
        facultyNumTr.textContent = data[el].facultyNumber;
        gradeTr.textContent = data[el].grade;

        mainTr.appendChild(firstNameTr);
        mainTr.appendChild(lastNameTr);
        mainTr.appendChild(facultyNumTr);
        mainTr.appendChild(gradeTr);

        tableBody.appendChild(mainTr);
    }
});