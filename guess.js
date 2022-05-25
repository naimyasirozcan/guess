
let submit = document.querySelector('#submit')
let divGuess = document.querySelector('#divGuess')
let result = document.createElement('h3')
result.classList.add('result')
divGuess.append(result)

submit.addEventListener('click', function () {
    let randomSayi = Math.floor(Math.random() * 10)

    let tahmin = document.querySelector('#guess')

    if (tahmin.value === randomSayi) {
        result.innerHTML = ('Good for you!')
    }
    else if (tahmin.value === '' || tahmin.value > 10) {
        result.innerHTML = ('Please enter a valid number!')
    }
    else {
        result.innerHTML = ("My number was " + randomSayi + ". Try again :(")
    }
    tahmin.value = ''
})