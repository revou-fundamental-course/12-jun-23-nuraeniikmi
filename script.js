function convertToCelsius(event) {
    event.preventDefault();
  
    var inputCelcius = document.getElementById("inputCelcius").value;
  
    if (!inputCelcius || inputCelcius === "0") {
      document.getElementById("inputFahrenheit").value = "0";
      document.getElementById("inputCelcius").value = "0";
      document.getElementById("inputConversion").value = "";
  
      document.getElementById("changeTitle").innerHTML = "<h4>Cara Kalulasi</h4>";
  
      alert("Please enter a valid number for Celsius temperature!");
      return;
    }
  
    var fahrenheit = inputCelcius * (9 / 5) + 32;
  
    document.getElementById("inputFahrenheit").value = `${fahrenheit}`;
    document.getElementById(
      "inputConversion"
    ).value = `${inputCelcius}°C * ( 9 / 5 ) + 32 = ${fahrenheit}°F`;
  
    document.getElementById("changeTitle").innerHTML = "<h4>Cara Kalkulasi</h4>";
  }
  
  function reset(event) {
    event.preventDefault();
  
    document.getElementById("inputFahrenheit").value = "0";
    document.getElementById("inputCelcius").value = "0";
    document.getElementById("inputConversion").value = "";
  }
  
  function reverseConversion(event) {
    event.preventDefault();
  
    var inputFahrenheit = document.getElementById("inputFahrenheit").value;
  
    if (!inputFahrenheit || inputFahrenheit === "0") {
      document.getElementById("inputFahrenheit").value = "0";
      document.getElementById("inputConversion").value = "";
      document.getElementById("inputCelcius").value = "0";
  
      document.getElementById("changeTitle").innerHTML = "<h4>Cara Kalkulasih4>";
  
      alert("Please enter a valid number for Celsius temperature!");
      return;
    }
  
    var celsius = ((inputFahrenheit - 32) * 5) / 9;
  
    document.getElementById("inputCelcius").value = `${celsius}`;
    document.getElementById(
      "inputConversion"
    ).value = `( ${inputFahrenheit}°F - 32 ) * 5 / 9 = ${celsius}°C`;
  
    document.getElementById("changeTitle").innerHTML = "<h4>Cara Kalkulasi</h4>";
  }