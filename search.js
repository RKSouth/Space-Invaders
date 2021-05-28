$(document).ready(function () {

  $("#submit").on("click", function (event) {

    let resultsTable = $(".resultsTable");

    let str = "";
    for (let i = 0; i < resultsTable.length; i++) {
      resultsTable[i].classList.remove("active");
    }

    this.classList.add("active");
    console.log($(".companySymbol"));

    console.log(str);

    $(".resultsTable").text(str);
    $(".tableHeader").text(str);
    // clear out old header details
    $(".companySymbol").empty();
    $(".primaryExchange").empty();
    $(".companyName").empty();


    const search = $("input").val();
    //it's pulling the array(full) and not the individual items from the array
    event.preventDefault();
    // $(".searchResults").show();
    getStock(search);


  });

  // today's date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var min = String(today.getMinutes() + 1).padStart(2, '0');

  today = mm + '/' + dd + '/' + yyyy + ' ' + hh + ":" + min;
  // document.write(today);
  $(".theDate").append(today)

  function getStock(search) {

    var queryURL = "https://cloud.iexapis.com/stable/stock/" + search + "/quote?token=pk_ab2f763af7f741d988ef13803ffd2ad8";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
      $(".companyName").append(response.companyName);
      $(".companySymbol").append(response.symbol);
      $(".primaryExchange").append(response.primaryExchange);


      $('.resultsTable').append('<tr>' + '<td>' + 'Real Time Price' + '</td>' + '<td>' + response.iexRealtimePrice + '</td>' + '<td><button class="iexRealTimePrice">' + 'Save Data' + '</button></td>' + '</tr>');
      $('.resultsTable').append('<tr>' + '<td>' + 'Previous Close' + '</td>' + '<td>' + response.previousClose + '</td>' + '<td><button class="previousClose">' + 'Save Data' + '</button></td>' + '</tr>');
      $('.resultsTable').append('<tr>' + '<td>' + '52 week High' + '</td>' + '<td>' + response.week52High + '</td>' + '<td><button class="week52High">' + 'Save Data' + '</button></td>' + '</tr>');
      $('.resultsTable').append('<tr>' + '<td>' + '52 week Low' + '</td>' + '<td>' + response.week52Low + '</td>' + '<td><button class="week52Low">' + 'Save Data' + '</button></td>' + '</tr>');
      $('.resultsTable').append('<tr>' + '<td>' + 'Change' + '</td>' + '<td>' + response.change + '</td>' + '<td><button class="change">' + 'Save Data' + '</button></td>' + '</tr>');
      $('.resultsTable').append('<tr>' + '<td>' + 'Change Percent' + '</td>' + '<td>' + response.changePercent + '</td>' + '<td><button class="changePercent">' + 'Save Data' + '</button></td>' + '</tr>');
      $('.resultsTable').append('<tr>' + '<td>' + 'ytd Change' + '</td>' + '<td>' + response.ytdChange + '</td>' + '<td><button class="ytdChange">' + 'Save Data' + '</button></td>' + '</tr>');

      $(".iexRealTimePrice").on("click", function (event) {
        const key = response.symbol + "'s " + "Real Time Price" + today
        localStorage.setItem(key, response.iexRealtimePrice);
        alert(response.symbol + "'s " + "Real Time Price was saved");
      })

      $(".previousClose").on("click", function (event) {
        const key = response.symbol + "'s " + "Previous Close" + today
        localStorage.setItem(key, response.previousClose);
        alert(response.symbol + "'s " + "Previous close was saved");

      })

      $(".week52High").on("click", function (event) {
        const key = response.symbol + "'s " + "52 week High" + today
        localStorage.setItem(key, response.week52High);
        alert(response.symbol + "'s " + "52 week high was saved");

      })

      $(".week52Low").on("click", function (event) {
        const key = response.symbol + "'s " + "52 week Low" + today
        localStorage.setItem(key, response.week52Low);
        alert(response.symbol + "'s " + "52 week low was saved");

      })

      $(".change").on("click", function (event) {
        const key = response.symbol + "'s " + "change" + today
        localStorage.setItem(key, response.change);
        alert(response.symbol + "'s " + "change was saved");

      })

      $(".changePercent").on("click", function (event) {
        const key = response.symbol + "'s " + "change percent" + today
        localStorage.setItem(key, response.changePercent);
        alert(response.symbol + "'s " + "change percent was saved");

      })

      $(".ytdChange").on("click", function (event) {
        const key = response.symbol + "'s " + "year-to-date change" + today
        localStorage.setItem(key, response.change);
        alert(response.symbol + "'s " + "year-to-date change was saved");

      })

    });

  }
})