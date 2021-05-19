$(document).ready(function() {
  $("#submitbtn").on("click", function(event) {
    var search = $("input").val();
    //it's pulling the array(full) and not the individual items from the array
      event.preventDefault();

    getStock(search);
    // getForecast(search);
    //   console.log(citiesArray);
    //  addCities(search);


    // localStorage.removeItem("search");
    // localStorage.setItem("search",JSON.stringify(citiesArray));
  

  });


  function getStock (search){
    
    var queryURL = "https://cloud.iexapis.com/stable/stock/" + search + "/quote?token=pk_ab2f763af7f741d988ef13803ffd2ad8";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) { 
      
      console.log(response)
      console.log(response.iexRealtimePrice)
  // $(".city").empty();

      // //create and add current days weather area
      // var title =$("<h1>").text(response.name + " " +presentMonth + "/" + presentDay + "/" + presentYear).addClass("city-title");
      // $(".city").append(title);
      // var temperature = $("<p>").text("Temperature: " + response.main.temp);
      // $(".city").append(temperature);
      // var humidity = $("<p>").text("Humidity: " + response.main.humidity);
      // $(".city").append(humidity);
      // var windspd = $("<p>").text("Wind Spead: " + response.wind.speed);
      // $(".city").append(windspd);
      // var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
      // $(".city-title").append(img);
      // // var UVIndex =getUVIndex(response.coord.lat, response.coord.lon);
      // // $(".city").append(UVIndex);
      // getUVIndex(response.coord.lat, response.coord.lon);
    });
    // $("#today").append();
    
  }
})