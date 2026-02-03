let history = [];

function checkFault() {
    let value = Number(document.getElementById("sensorInput").value);

    history.push(value);
    if (history.length > 5) history.shift();

    if (isNaN(value)) {
        showResult("Please enter a valid value.", "black");
    }
    else if (value < 0 || value > 100) {
        showResult("Critical Fault: Sensor value out of range", "red");
    }
    else if (isUnstable(history)) {
        showResult("Warning: Unstable sensor readings detected", "orange");
    }
    else {
        showResult("System Normal", "green");
    }
}

function isUnstable(values) {
    if (values.length < 3) return false;
    let range = Math.max(...values) - Math.min(...values);
    return range > 20;
}

function showResult(message, color) {
    let result = document.getElementById("result");
    result.innerHTML = message;
    result.style.color = color;
}
