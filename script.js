$(document).ready(function(){
// NPS API
var stateIn = "MN"
var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" + stateIn + "&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    for (let i = 0; i < response.data.length; i++) {
        var allParks = response.data[i];

        var imgUrl = allParks.images[0].url;
        var des = allParks.description;
        var name = allParks.name;

        var parkCard = $("#park-card");
        var cardDiv = $("<div>").attr("class", "card float-left").attr("style", "width: 18rem");
        var cardImg = $("<img>").attr("src", imgUrl).attr("class", "card-img-top").attr("id", "img").attr("alt", "");
        var cardBody = $("<div>").attr("class", "card-body");
        var cardh5 = $("<h5>").attr("class", "card-title").text(name);
        var cardh6 = $("<h6>").attr("class", "card-subtitle mb-2 text-muted");
        var cardp = $("<p>").attr("class", "card-text").attr("id", "placeholder").text(des);
        var hrTag = $('<hr>');

        $(parkCard).append(cardDiv, cardImg, cardBody, cardh5, cardh6, cardp, hrTag);

    }

});
// Weather API
var cityState = "Saint Paul,MN";
var queryURLweather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&units=imperial&appid=c8964eed8811dd75cc40e8ea60039298";

$.ajax({
    url: queryURLweather,
    method: "GET"
}).then(function (feedback) {
    var fiveDayForecast = feedback.list;

    for (var i = 0; i < fiveDayForecast.length; i++) {
        var currentDay = fiveDayForecast[i];

        var { temp, feels_like, temp_min, temp_max, humidity } = currentDay.main;
        var { description } = currentDay.weather[0];

        var weatherData = $('#weather-data');

            var cityWeather = $('<h5>').text('Saint Paul,MN');
        if (feedback.list[i].dt_txt.indexOf('15:00:00') !== -1) {
            var title = $('<h5>').addClass('card-title').text(new Date(feedback.list[i].dt_txt).toLocaleDateString("en-EN", { weekday: "long" }));
            var temperature = $('<p>').text("Temperature: " + (temp) + " °F");
            var feelsLike = $('<p>').text("Feels Like: " + (feels_like) + " °F");
            var tempMin = $('<p>').text("Temperature Min: " + (temp_min) + " °F");
            var tempMax = $('<p>').text("Temperature Max: " + (temp_max) + " °F");
            var humid = $('<p>').text("Humidity: " + (humidity) + "%");
            var rainLevel = $('<p>').text("Precipitation Level: " + (description));
            var hrTag = $('<hr>');
            $(weatherData).append(cityWeather, title, temperature, feelsLike, tempMin, tempMax, humid, rainLevel, hrTag);
        }
    }
})

$("#IA").click(function changeCity(cityState) {
    //empty page and render new information
    //clearing park data and weather data to render new data
    //selecting park-card div and weather data div
    // selecting using jquery method $("#park-card") $("#weather-data")

    $("#park-card").empty();
    $("#weather-data").empty();

    var cityState = "Des Moines,IA";
    console.log(cityState);
    var queryURLweather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&units=imperial&appid=c8964eed8811dd75cc40e8ea60039298";

    $.ajax({
        url: queryURLweather,
        method: "GET"
    }).then(function (feedback) {
        var fiveDayForecast = feedback.list;

        for (var i = 0; i < fiveDayForecast.length; i++) {
            var currentDay = fiveDayForecast[i];
            var { temp, feels_like, temp_min, temp_max, humidity } = currentDay.main;
            var { description } = currentDay.weather[0];
            var weatherData = $('#weather-data');
            
            var cityWeather = $('<h5>').text('Des Moines,IA');
            if (feedback.list[i].dt_txt.indexOf('15:00:00') !== -1) {
                var title = $('<h5>').addClass('card-title').text(new Date(feedback.list[i].dt_txt).toLocaleDateString("en-EN", { weekday: "long" }));
                var temperature = $('<p>').text("Temperature: " + (temp) + " °F");
                var feelsLike = $('<p>').text("Feels Like: " + (feels_like) + " °F");
                var tempMin = $('<p>').text("Temperature Min: " + (temp_min) + " °F");
                var tempMax = $('<p>').text("Temperature Max: " + (temp_max) + " °F");
                var humid = $('<p>').text("Humidity: " + (humidity) + "%");
                var rainLevel = $('<p>').text("Precipitation Level: " + (description));
                var hrTag = $('<hr>');
                $(weatherData).append(cityWeather, title, temperature, feelsLike, tempMin, tempMax, humid, rainLevel, hrTag);
            }
        }
    });

    var stateIn = "IA"
    var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" + stateIn + "&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (let i = 0; i < response.data.length; i++) {
            var allParks = response.data[i];

            var imgUrl = allParks.images[0].url;
            var des = allParks.description;
            var name = allParks.name;

            var parkCard = $("#park-card");
            var cardDiv = $("<div>").attr("class", "card float-left").attr("style", "width: 18rem");
            var cardImg = $("<img>").attr("src", imgUrl).attr("class", "card-img-top").attr("id", "img").attr("alt", "");
            var cardBody = $("<div>").attr("class", "card-body");
            var cardh5 = $("<h5>").attr("class", "card-title").text(name);
            var cardh6 = $("<h6>").attr("class", "card-subtitle mb-2 text-muted");
            var cardp = $("<p>").attr("class", "card-text").attr("id", "placeholder").text(des);
            var hrTag = $('<hr>');

            $(parkCard).append(cardDiv, cardImg, cardBody, cardh5, cardh6, cardp, hrTag);

        }

    });
});

$("#MN").click(function changeCity(cityState) {

    $("#park-card").empty();
    $("#weather-data").empty();

    var cityState = "Saint Paul,MN";
    console.log(cityState);
    var queryURLweather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&units=imperial&appid=c8964eed8811dd75cc40e8ea60039298";

    $.ajax({
        url: queryURLweather,
        method: "GET"
    }).then(function (feedback) {
        var fiveDayForecast = feedback.list;

        for (var i = 0; i < fiveDayForecast.length; i++) {
            var currentDay = fiveDayForecast[i];
            var { temp, feels_like, temp_min, temp_max, humidity } = currentDay.main;
            var { description } = currentDay.weather[0];
            var weatherData = $('#weather-data');

            var cityWeather = $('<h5>').text('Saint Paul,MN');

            if (feedback.list[i].dt_txt.indexOf('15:00:00') !== -1) {
                var title = $('<h5>').addClass('card-title').text(new Date(feedback.list[i].dt_txt).toLocaleDateString("en-EN", { weekday: "long" }));
                var temperature = $('<p>').text("Temperature: " + (temp) + " °F");
                var feelsLike = $('<p>').text("Feels Like: " + (feels_like) + " °F");
                var tempMin = $('<p>').text("Temperature Min: " + (temp_min) + " °F");
                var tempMax = $('<p>').text("Temperature Max: " + (temp_max) + " °F");
                var humid = $('<p>').text("Humidity: " + (humidity) + "%");
                var rainLevel = $('<p>').text("Precipitation Level: " + (description));
                var hrTag = $('<hr>');
                $(weatherData).append(cityWeather, title, temperature, feelsLike, tempMin, tempMax, humid, rainLevel, hrTag);
            }
        }
    });

    var stateIn = "MN"
    var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" + stateIn + "&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (let i = 0; i < response.data.length; i++) {
            var allParks = response.data[i];

            var imgUrl = allParks.images[0].url;
            var des = allParks.description;
            var name = allParks.name;

            var parkCard = $("#park-card");
            var cardDiv = $("<div>").attr("class", "card float-left").attr("style", "width: 18rem");
            var cardImg = $("<img>").attr("src", imgUrl).attr("class", "card-img-top").attr("id", "img").attr("alt", "");
            var cardBody = $("<div>").attr("class", "card-body");
            var cardh5 = $("<h5>").attr("class", "card-title").text(name);
            var cardh6 = $("<h6>").attr("class", "card-subtitle mb-2 text-muted");
            var cardp = $("<p>").attr("class", "card-text").attr("id", "placeholder").text(des);
            var hrTag = $('<hr>');

            $(parkCard).append(cardDiv, cardImg, cardBody, cardh5, cardh6, cardp, hrTag);

        }

    });
});

$("#ND").click(function changeCity(cityState) {
    $("#park-card").empty();
    $("#weather-data").empty();

    var cityState = "Bismarck,ND";
    console.log(cityState);
    var queryURLweather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&units=imperial&appid=c8964eed8811dd75cc40e8ea60039298";

    $.ajax({
        url: queryURLweather,
        method: "GET"
    }).then(function (feedback) {
        var fiveDayForecast = feedback.list;

        for (var i = 0; i < fiveDayForecast.length; i++) {
            var currentDay = fiveDayForecast[i];
            var { temp, feels_like, temp_min, temp_max, humidity } = currentDay.main;
            var { description } = currentDay.weather[0];
            var weatherData = $('#weather-data');

            var cityWeather = $('<h5>').text('Bismarck,ND');
            if (feedback.list[i].dt_txt.indexOf('15:00:00') !== -1) {
                var title = $('<h5>').addClass('card-title').text(new Date(feedback.list[i].dt_txt).toLocaleDateString("en-EN", { weekday: "long" }));
                var temperature = $('<p>').text("Temperature: " + (temp) + " °F");
                var feelsLike = $('<p>').text("Feels Like: " + (feels_like) + " °F");
                var tempMin = $('<p>').text("Temperature Min: " + (temp_min) + " °F");
                var tempMax = $('<p>').text("Temperature Max: " + (temp_max) + " °F");
                var humid = $('<p>').text("Humidity: " + (humidity) + "%");
                var rainLevel = $('<p>').text("Precipitation Level: " + (description));
                var hrTag = $('<hr>');
                $(weatherData).append(cityWeather, title, temperature, feelsLike, tempMin, tempMax, humid, rainLevel, hrTag);
            }
        }
    });
    var stateIn = "ND"
    var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" + stateIn + "&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (let i = 0; i < response.data.length; i++) {
            var allParks = response.data[i];

            var imgUrl = allParks.images[0].url;
            var des = allParks.description;
            var name = allParks.name;

            var parkCard = $("#park-card");
            var cardDiv = $("<div>").attr("class", "card float-left").attr("style", "width: 18rem");
            var cardImg = $("<img>").attr("src", imgUrl).attr("class", "card-img-top").attr("id", "img").attr("alt", "");
            var cardBody = $("<div>").attr("class", "card-body");
            var cardh5 = $("<h5>").attr("class", "card-title").text(name);
            var cardh6 = $("<h6>").attr("class", "card-subtitle mb-2 text-muted");
            var cardp = $("<p>").attr("class", "card-text").attr("id", "placeholder").text(des);
            var hrTag = $('<hr>');

            $(parkCard).append(cardDiv, cardImg, cardBody, cardh5, cardh6, cardp, hrTag);

        }

    });
});

$("#SD").click(function changeCity(cityState) {
    $("#park-card").empty();
    $("#weather-data").empty();

    var cityState = "Pierre,SD";
    console.log(cityState);
    var queryURLweather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&units=imperial&appid=c8964eed8811dd75cc40e8ea60039298";

    $.ajax({
        url: queryURLweather,
        method: "GET"
    }).then(function (feedback) {
        var fiveDayForecast = feedback.list;

        for (var i = 0; i < fiveDayForecast.length; i++) {
            var currentDay = fiveDayForecast[i];
            var { temp, feels_like, temp_min, temp_max, humidity } = currentDay.main;
            var { description } = currentDay.weather[0];
            var weatherData = $('#weather-data');

            var cityWeather = $('<h5>').text('Pierre,SD');
            if (feedback.list[i].dt_txt.indexOf('15:00:00') !== -1) {
                var title = $('<h5>').addClass('card-title').text(new Date(feedback.list[i].dt_txt).toLocaleDateString("en-EN", { weekday: "long" }));
                var temperature = $('<p>').text("Temperature: " + (temp) + " °F");
                var feelsLike = $('<p>').text("Feels Like: " + (feels_like) + " °F");
                var tempMin = $('<p>').text("Temperature Min: " + (temp_min) + " °F");
                var tempMax = $('<p>').text("Temperature Max: " + (temp_max) + " °F");
                var humid = $('<p>').text("Humidity: " + (humidity) + "%");
                var rainLevel = $('<p>').text("Precipitation Level: " + (description));
                var hrTag = $('<hr>');
                $(weatherData).append(cityWeather, title, temperature, feelsLike, tempMin, tempMax, humid, rainLevel, hrTag);
            }
        }
    });
    var stateIn = "SD"
    var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" + stateIn + "&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (let i = 0; i < response.data.length; i++) {
            var allParks = response.data[i];

            var imgUrl = allParks.images[0].url;
            var des = allParks.description;
            var name = allParks.name;

            var parkCard = $("#park-card");
            var cardDiv = $("<div>").attr("class", "card float-left").attr("style", "width: 18rem");
            var cardImg = $("<img>").attr("src", imgUrl).attr("class", "card-img-top").attr("id", "img").attr("alt", "");
            var cardBody = $("<div>").attr("class", "card-body");
            var cardh5 = $("<h5>").attr("class", "card-title").text(name);
            var cardh6 = $("<h6>").attr("class", "card-subtitle mb-2 text-muted");
            var cardp = $("<p>").attr("class", "card-text").attr("id", "placeholder").text(des);
            var hrTag = $('<hr>');

            $(parkCard).append(cardDiv, cardImg, cardBody, cardh5, cardh6, cardp, hrTag);

        }

    });
});

$("#WI").click(function changeCity(cityState) {
    $("#park-card").empty();
    $("#weather-data").empty();

    var cityState = "Madison,WI";
    console.log(cityState);
    var queryURLweather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&units=imperial&appid=c8964eed8811dd75cc40e8ea60039298";

    $.ajax({
        url: queryURLweather,
        method: "GET"
    }).then(function (feedback) {
        var fiveDayForecast = feedback.list;

        for (var i = 0; i < fiveDayForecast.length; i++) {
            var currentDay = fiveDayForecast[i];
            var { temp, feels_like, temp_min, temp_max, humidity } = currentDay.main;
            var { description } = currentDay.weather[0];
            var weatherData = $('#weather-data');

            var cityWeather = $('<h5>').text('Madison,WI');
            if (feedback.list[i].dt_txt.indexOf('15:00:00') !== -1) {
                var title = $('<h5>').addClass('card-title').text(new Date(feedback.list[i].dt_txt).toLocaleDateString("en-EN", { weekday: "long" }));
                var temperature = $('<p>').text("Temperature: " + (temp) + " °F");
                var feelsLike = $('<p>').text("Feels Like: " + (feels_like) + " °F");
                var tempMin = $('<p>').text("Temperature Min: " + (temp_min) + " °F");
                var tempMax = $('<p>').text("Temperature Max: " + (temp_max) + " °F");
                var humid = $('<p>').text("Humidity: " + (humidity) + "%");
                var rainLevel = $('<p>').text("Precipitation Level: " + (description));
                var hrTag = $('<hr>');
                $(weatherData).append(cityWeather, title, temperature, feelsLike, tempMin, tempMax, humid, rainLevel, hrTag);
            }
        }
    });
    var stateIn = "WI"
    var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" + stateIn + "&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (let i = 0; i < response.data.length; i++) {
            var allParks = response.data[i];

            var imgUrl = allParks.images[0].url;
            var des = allParks.description;
            var name = allParks.name;

            var parkCard = $("#park-card");
            var cardDiv = $("<div>").attr("class", "card float-left").attr("style", "width: 18rem");
            var cardImg = $("<img>").attr("src", imgUrl).attr("class", "card-img-top").attr("id", "img").attr("alt", "");
            var cardBody = $("<div>").attr("class", "card-body");
            var cardh5 = $("<h5>").attr("class", "card-title").text(name);
            var cardh6 = $("<h6>").attr("class", "card-subtitle mb-2 text-muted");
            var cardp = $("<p>").attr("class", "card-text").attr("id", "placeholder").text(des);
            var hrTag = $('<hr>');

            $(parkCard).append(cardDiv, cardImg, cardBody, cardh5, cardh6, cardp, hrTag);

        }

    });
});
})


