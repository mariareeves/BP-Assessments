console.log('test')


// color btn
const colorBtn = document.getElementById('color')

const myFavoriteColor = () => {
    alert('My favorite color is red')
}

colorBtn.addEventListener('click', myFavoriteColor)

// place btn 
const placeBtn = document.getElementById('place')

const myFavoritePlace = () => {
    alert('My favorite place is Hawaii')
}

placeBtn.addEventListener('click', myFavoritePlace)

// ritual btn
const ritualBtn = document.getElementById('ritual')

const myFavoriteRitual = () => {
    alert('My favorite ritual is the Miracle Morning!')
}

ritualBtn.addEventListener('click', myFavoriteRitual)
