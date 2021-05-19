$(document).ready(function() {
  $(".searchResults").hide();
  $("#submitbtn").on("click", function(event) {
    var search = $("input").val();
    //it's pulling the array(full) and not the individual items from the array
      event.preventDefault();
      $(".searchResults").show();
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
      $(".companyName").append(response.companyName);
      $(".companySymbol").append(response.symbol);
      $(".primaryExchange").append(response.primaryExchange);


      $('.resultsTable').append( '<tr>' + '<td>' + response.iexRealtimePrice + '</td>' + '<td>' + 'RealtimePrice' + '</td>' + '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + response.previousClose + '</td>' + '<td>' + 'previous close' + '</td>' + '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + response.week52High + '</td>' + '<td>' + 'week52High' + '</td>' + '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + response.week52Low + '</td>' + '<td>' + 'week52Low' + '</td>' + '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + response.change + '</td>' + '<td>' + 'change' + '</td>' + '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + response.changePercent + '</td>' + '<td>' + 'changePercent' + '</td>' + '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + response.ytdChange + '</td>' + '<td>' + 'ytdChange' + '</td>' + '</tr>' );

    });
    // $("#today").append();
    
  }
})