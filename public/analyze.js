// get all workout data from back-end

fetch("/api/stocks/range")
  .then(response => {
    return response.json();
    console.log(data);
  })
  .then(data => {
    populateChart(data);
  });

  function populateChart(data) {
    let durations = duration(data);
    let pounds = calculateTotalWeight(data);
    let workouts = workoutNames(data);
    const colors = generatePalette();
  // these are the types of graphs we are using, we need to get them
    let line = document.querySelector("#canvas").getContext("2d");
    let bar = document.querySelector("#canvas2").getContext("2d");
    let pie = document.querySelector("#canvas3").getContext("2d");
    let pie2 = document.querySelector("#canvas4").getContext("2d")