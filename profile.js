const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')
const submitBtn = document.querySelector('form#contact2')

favoriteColor = (evt) => {
    evt.preventDefault()
    alert("My favorite color is forest green.")
}
favoritePlace = (evt) => {
    evt.preventDefault()

    alert("My favorite place is Kapalua on the island of Maui in the Aloha State.")
}
favoriteRitual = (evt) => {
    evt.preventDefault()

    alert("I love beach volleyball. It's a ritual on Tuesday nights in Encinitas, CA - where I grew up.")
}
handleSubmit2= (evt) => {
    evt.preventDefault()

    alert('form submitted')
}

colorBtn.addEventListener('click', favoriteColor)
placeBtn.addEventListener('click', favoritePlace)
ritualBtn.addEventListener('click', favoriteRitual)
submitBtn.addEventListener('submit', handleSubmit2)