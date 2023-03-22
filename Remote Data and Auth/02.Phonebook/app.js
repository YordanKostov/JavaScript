function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/phonebook';
    let phonebook = document.getElementById('phonebook');

    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');
    
    loadBtn.addEventListener('click', async () => {
        let response = await fetch(url);
        let data = await response.json();


        for (let el in data) {
            let btn = document.createElement('button');
            btn.textContent = 'Delete';
            btn.addEventListener('click', async (ev) => {
                let response = await fetch(`http://localhost:3030/jsonstore/phonebook/${ev.target.parentNode.getAttribute('id')}`, {method: 'DELETE'});
                let info = response.json();
                console.log(info);
            });
            let li = document.createElement('li');
            li.textContent = `${data[el].person}: ${data[el].phone}`;
            li.setAttribute('id', data[el]._id);
            li.appendChild(btn);
            console.log(btn.parentNode.id);
            phonebook.appendChild(li);
        }

    });

    createBtn.addEventListener('click', () => {
        let person = document.getElementById('person');
        let phone = document.getElementById('phone');

        let obj = {
            person: person.value,
            phone: phone.value,
        };

        let options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        };

        fetch(url, options);

        person.value = '';
        phone.value = '';
    });

}

attachEvents();