class UI {
    constructor(){
        this.data = document.getElementById("data");
    }
    showData(city){
        this.data.innerHTML = `
            <div class="cityName">City:
                ${city.name}
            </div>
            <div class="main"> Temperature:
                ${city.main.temp}
            </div>
            <div class="system">Wind Speed:
                ${city.wind.speed}
            </div>
            <div class="coord-dt">Coordinates: 
                ${JSON.stringify(city.coord)}
            </div>
        `;
        document.getElementById("city").value = "";
    }
}