function attachEvents() {

    let url = 'http://localhost:3030/jsonstore/messenger';
    let submitBtn = document.getElementById('submit').addEventListener('click', () => {
        let author = document.querySelector('[name = "author"]').value;
        let content = document.querySelector('[name = "content"]').value;
        let obj = { author, content };
        console.log(obj);
        let data = {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        };
        fetch(url, data);
        document.querySelector('[name = "author"]').value = '';
        document.querySelector('[name = "content"]').value = '';
    }

    
    );
    
    let refreshBtn = document.getElementById('refresh').addEventListener('click', async () => {
        let messages = document.getElementById('messages');
        
        let response = await fetch(url);
        let data = await response.json();

        for(let element in data) {
            messages.textContent += `\n${data[element].author}: ${data[element].content}`;
        };

    });
}
attachEvents();