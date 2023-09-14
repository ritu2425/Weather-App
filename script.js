

let weather = {
    apiKey :"9de074f594b14736c6c4642527a3a5d5",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=metric&appid="
            +this.apiKey
            )
            .then((response)=> response.json())
            .then((data)=> this.displayWeather(data)); //console.log(data));    
    },

    displayWeather: function(data)
    {
        const {name} = data;
        const {icon, description}= data.weather[0];
        const {temp, humidity}=data.main;
        const {speed}= data.wind; 
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").scr = "https://openweathermap.org/img/wn/" +icon+ ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.floor(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed:" + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('45.jpg')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Belgaum");


