let weather = {
    apiKey:"4954bf84a96925d81d1636e9141b5859",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey
    )
        .then((response)=>response.json())
        .then((data)=> console.log(data));
    },
    displayweather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const{speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in" = name;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon + "01n@2x.png";
        document.querySelector(".description").innterText = decription;
        document.querySelector(".temp").innterText = temp + "°F";
        document.querySelector(".humidity").innterText = "Humidity: " + humidity + "%";
        document.querySelector(".speed").innerText = "Wing speed " + speed + "mph";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?'"+ name + ")"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter")
    weather.search();
});