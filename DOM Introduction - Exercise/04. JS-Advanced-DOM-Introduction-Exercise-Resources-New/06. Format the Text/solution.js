function solve() {
    let input = (document.getElementById("input").value).split('.');
    input.pop()
    let output = document.getElementById("output");
    let result = "<p>";
    let counter = 0;

    for(let i = 0; i < input.length; i++) {
        result += `${input[i]}.`;
        counter++
        if (counter % 3 == 0) {
            result += "</p>"
            result += "<p>"
        }
    }
    output.innerHTML = result
}