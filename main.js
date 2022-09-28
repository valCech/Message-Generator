// come up with a random message idea: 
// The best car you will ever have:

// Car brand:
let car = ['BMW', 'Skoda', 'Porsche', 'Ferrari', 'Lexus', 'Wolksvagen', 'Vauxhal', 'Toyota', 'McLaren',' Audi',' Seat', 'Ford', 'Lada'];
// 
let carType = ['sport', 'powerful', 'family type', 'rusty', 'old', 'new', 'fast', 'slow', 'cheap', 'expensive'];
// 
let carColour = ['blue', 'yelow', 'red', 'green', 'black', 'white', 'grey', 'pink', 'purple', 'orange', 'brown', 'silver', 'gold'];
// function for the random message generator:
let randomcar = () => {
    let randomCar = Math.floor(Math.random() * car.length);
    let randomCarType = Math.floor(Math.random() * carType.length);
    let randomCarColour = Math.floor(Math.random() * carColour.length);
    let randomCarMessage = `Your best car you will be: ${car[randomCar]} ${carType[randomCarType]} ${carColour[randomCarColour]}`;

    console.log(randomCarMessage);
}
randomcar();




    

