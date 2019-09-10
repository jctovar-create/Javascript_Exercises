const weather = new Weather;
const ui = new UI;

const city = document.getElementById("city");

const searchBtn = document.getElementById("searchBtn");



searchBtn.addEventListener("click", (e) =>{
    
        let userInput = city.value;
    
        localStorage.setItem("city", userInput);
    
        weather.getData(userInput)
        .then(data => {
            console.log
            ui.showData(data.weatherData);
        });
    
    
    e.preventDefault();
});









// searchBtn.addEventListener("click", (e) => {
//     console.log(city.value);
//     e.preventDefault();
// })