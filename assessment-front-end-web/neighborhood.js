console.log('test')
const restaurantText = document.querySelector('#restaurantResult')

// create a function to give the user a random restaurant suggestion
const btnRandom = document.querySelector('#btn-random')

function getRandomRestaurant() {
    const restaurants = [
        "Pumphouse",
        "The Roost",
        "Sushi Hana",
        "La Vita Bella",
        "3 Margaritas",
        "Rosa Cantina"
    ];

    const random = Math.floor(Math.random() * restaurants.length)
    const randomRestaurant = restaurants[random]

    if (restaurantText) {
        restaurantText.textContent = "Restaurant Recommendation: " + randomRestaurant;
    } else {
        restaurantText.textContent = "Restaurant Recommendation: " + randomRestaurant;
        document.body.appendChild(restaurantText);
    }
}

btnRandom.addEventListener('click', getRandomRestaurant)