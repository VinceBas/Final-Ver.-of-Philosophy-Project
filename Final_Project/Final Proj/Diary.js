let storage = []

function saveDiary() {
    let thoughts = document.querySelector('#textArea').value
    let result = {
        text: thoughts,
        date: new Date()
    }
    storage.push(result)

    document.querySelector('#textArea').value = ''

    resutDiary()
}

function resutDiary() {
    let resultDiv = document.querySelector('#results')

    let html = ''
    for (let i = 0; i < storage.length; i++) {
        let myText = storage[i].text
        let myDate = storage[i].date

        html += `<span style= "font-size:25px; font-family: Arial"> ${myText} </span> <br/>`
        html += `<span style= "color:blue; font-size:18px; font-family: Arial"> ${myDate.toLocaleString()} </span><hr>`
    }
    resultDiv.innerHTML = html

    if (storage.length % 5 === 0) {
        alert("You have already written a total " + storage.length + " Entries ")
    }
}



