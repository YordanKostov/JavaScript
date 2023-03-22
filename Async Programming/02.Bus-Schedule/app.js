function solve() {
    
    let infoBox = document.querySelector("#info span");
    let departBtn = document.getElementById("depart");
    let arriveBtn = document.getElementById('arrive');
    let nextStop = 'depot';
    let currentStop = 'Depot';

    async function depart() {
        try{
        let url = `http://localhost:3030/jsonstore/bus/schedule/` + nextStop;
        let response = await fetch(url);
        let data = await response.json();
        infoBox.textContent = `Next stop ${data.name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        currentStop = data.name;
        nextStop = `${data.next}`;
        } catch {
            infoBox.textContent = "Not Connected";
        }
    }

    function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        infoBox.textContent = `Arriving at ${currentStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();