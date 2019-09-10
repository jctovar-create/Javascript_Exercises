class Weather {
    constructor(){
        this.api_key = "9c237a3fdd9054bc2be56a83cfbe2ce2";
    }

    async getData(city){
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}`);

        const weatherData = await weather.json();
        
        return{
            weatherData
        }
    }
}