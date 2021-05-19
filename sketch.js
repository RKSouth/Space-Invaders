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


      $('.resultsTable').append( '<tr>' + '<td>' + 'RealtimePrice' +'</td>' + '<td>' + response.iexRealtimePrice + '</td>' + '<td><button class="iexRealTimePrice">' + 'Save Data' +'</button></td>'+ '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + 'previous close' + '</td>' + '<td>'  + response.previousClose + '</td>' + '<td><button class="previousClose">' + 'Save Data' +'</button></td>'+ '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + 'week52High' + '</td>' + '<td>'  + response.week52High + '</td>' + '<td><button class="week52High">' + 'Save Data' +'</button></td>'+ '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + 'week52Low' + '</td>' + '<td>'  + response.week52Low + '</td>' + '<td><button class="week52Low">' + 'Save Data' +'</button></td>' + '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + 'change' + '</td>' + '<td>'  + response.change + '</td>'+ '<td><button class="change">' + 'Save Data' +'</button></td>' +  '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + 'changePercent' + '</td>' + '<td>' + response.changePercent + '</td>'+ '<td><button class="changePercent">' + 'Save Data' +'</button></td>' + '</tr>' );
      $('.resultsTable').append( '<tr>' + '<td>' + 'ytdChange' +  '</td>' + '<td>' + response.ytdChange +'</td>' + '<td><button class="ytdChange">' + 'Save Data' +'</button></td>' + '</tr>' );

    });
    // $("#today").append();
    
  }
})