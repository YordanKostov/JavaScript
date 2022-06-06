function deleteByEmail() {
    let emails = Array.from(document.querySelectorAll('tbody tr')  )
    let deletedEmail = document.querySelector('[name="email"]').value
    let result = document.getElementById('result')
    let isRemoved = false
    for(let i = 0; i < emails.length; i++){
        if (emails[i].textContent.includes(deletedEmail)){
            emails[i].remove()
            isRemoved = true
        }
    }
    if (isRemoved){
        result.textContent = 'Deleted'
    }else{
        result.textContent = 'Not Found'
    }
}