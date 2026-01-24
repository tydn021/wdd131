let tempF = 54;
let speedMPH = 5;

const calculateWindChill = (tempF , speedMPH) => {
    if (tempF > 50 || speedMPH < 3) {
        return "N/A";
    }
    return 35.74 + (0.6215 * tempF) - (37.75 * Math.pow(speedMPH, 0.16) + (0.4275 * tempF * Math.pow(speedMPH, 0.16)));


}

let result = calculateWindChill(tempF , speedMPH);

let formattedResult = typeof result === 'number' ? result.toFixed(1) + "°F": result;

document.getElementById('windChill').innerText = "Wind Chill: " + formattedResult; 

