// Windchill factor //

let T = 29;
let vs = 13;
let windChill;

if (T < 10 && vs > 4.8) {
    document.querySelector("#windChill").innerHTML = calculateWincdChill(T, vs);
} else {
    document.querySelector("#windChill").innerHTML = "N/A";
}
// Function to calculate windchill

function calculateWincdChill(T, vs) {
    windChill = 13.12 + (0.6215 * T) - (11.37 * Math.pow(vs, 0.16)) + (0.3965 * T * Math.pow(vs, 0.16));
    return windChill.toFixed(1)
}

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;


