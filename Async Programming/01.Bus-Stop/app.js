async function getInfo() {
    let stopID = document.getElementById('stopId').value;
    let resultList = document.getElementById('buses');
    let stopName = document.getElementById('stopName');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    try{
        let response = await fetch(url);
        let data = await response.json();
        stopName.textContent = data.name;
        for(let bus in data.buses){
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            resultList.appendChild(li);
        }
        } catch{
            stopName.textContent = 'Error';
            resultList.innerHTML = '';
        }
}