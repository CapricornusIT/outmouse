const item = document.querySelectorAll('.item')
const body = document.querySelector('body')
const card = document.querySelectorAll('.card')
const card2 = document.querySelectorAll('.card2')
const items = document.querySelector('.items')
const cards = document.querySelectorAll('.cards')

// item[0].style.background = 'green'
// item[2].style.background = 'yellow'

for (let i = 0; i < item.length; i++) {
    item[i].style.background = item[i].getAttribute('data-bg')
    item[i].addEventListener('click', function(){
        body.style.background = item[i].getAttribute('data-bg')
    })
}

function randColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}
console.log(randColor());

function randDeg() {
    return Math.floor(Math.random() * 361)
}

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
        card[i].style.background = randColor()
    })
    card2[i].addEventListener('click', function() {
        card2[i].style.background = `linear-gradient(${randDeg()}deg, ${randColor()}, ${randColor()}, ${randColor()})`
    })
}

items.addEventListener('click', function () {
    for (let i = 0; i < card.length; i++) {
        card[i].removeAttribute('style')
        card2[i].removeAttribute('style')
    }
})

// item.addEventListener('click', function(){
//     item.setAttribute('data-bg', 'dog')
//     console.log(item.getAttribute('data-bg'));
// })

// console.log(box.innerHTML);
// box.innerHTML = '<div class="success">Вход выполнен</div>'

// item.addEventListener('click', function() {
//     item.innerHTML = '<img src="Image/Dog.jpg" alt="">'
// })
// const items = document.querySelector('.items')

// item.addEventListener('click', function () {
//     if(item.style.background == 'red'){
//         item.style.background = 'white'
//     }else{
//         item.style.background = 'red'
//         console.log(0);
//     }
// })

// item.addEventListener('click', function () {
//     item.style.background = 'green'
// })
// item.addEventListener('mouseover', function () {
//     item.style.background = 'yellow'
// })
// item.addEventListener('mouseout', function () {
//     item.style.background = 'pink'
// })

// item.addEventListener('click', function () {
//     item.setAttribute('src', 'Image/Dog.jpg')
// })
// items.addEventListener('click', function () {
//     item.removeAttribute('src', 'Image/Dog.jpg')
// })

