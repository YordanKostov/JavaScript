function lockedProfile() {
    let parents = Array.from(document.querySelectorAll('.profile'))

    for (let parent of parents) {
        parent.querySelector('.profile button').addEventListener('click', toggle)

        function toggle(e) {
                let infoDiv = parent.querySelector('div')

                if (parent.querySelector("input[type = 'radio'][value = 'unlock']").checked) {
                    if (e.target.textContent == 'Show more') {
                        infoDiv.style.display = "block"
                        e.target.textContent = 'Hide it'
                    } else {
                        infoDiv.style.display = ""
                        e.target.textContent = 'Show more'
                    }

            }
        }
    }
}